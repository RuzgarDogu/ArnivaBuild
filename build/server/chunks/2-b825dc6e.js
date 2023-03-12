const MenuRoutes = [
  {
    name: "Ana Sayfa",
    path: "/home",
    role: ["user"]
  },
  {
    name: "Satışlar",
    path: "/sales",
    role: ["user"]
  },
  {
    name: "Ana Sayfa",
    path: "/dashboard",
    role: ["admin"],
    icon: "dashboard"
  },
  {
    name: "Canlı Veri",
    path: "/live",
    role: ["admin"],
    icon: "graph"
  },
  {
    name: "Rapor",
    path: "/report",
    role: ["admin"],
    icon: "list"
  },
  {
    name: "Ayarlar",
    path: "/settings",
    role: ["admin", "user"],
    icon: "settings"
  },
  {
    name: "Çıkış",
    path: "/logout",
    role: ["user", "admin"],
    icon: "logout"
  }
];
const load = async ({ locals }) => {
  const roles = ["user", "admin", "guest"];
  const menu = MenuRoutes.filter((item) => item.role.includes(roles[locals.isadmin]));
  return {
    role: roles[locals.isadmin],
    menu,
    username: locals.username
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_layout.svelte-b7e9633e.js')).default;
const file = '_app/immutable/entry/(pages)-layout.svelte.0e4b67f6.js';
const server_id = "src/routes/(pages)/+layout.server.ts";
const imports = ["_app/immutable/entry/(pages)-layout.svelte.0e4b67f6.js","_app/immutable/chunks/index.bc7c65c9.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-b825dc6e.js.map
