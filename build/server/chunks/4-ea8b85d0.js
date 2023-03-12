const load = async ({ fetch }) => {
  return {
    packets: await fetch("/guide/packets").then((res) => res.json())
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./layout.svelte-94b3c5b9.js')).default;
const file = '_app/immutable/entry/layout.svelte.aa3dcaa2.js';
const server_id = "src/routes/(pages)/(guide)/+layout.server.ts";
const imports = ["_app/immutable/entry/layout.svelte.aa3dcaa2.js","_app/immutable/chunks/index.3c704159.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-ea8b85d0.js.map
