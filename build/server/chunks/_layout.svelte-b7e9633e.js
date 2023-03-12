import { c as create_ssr_component, v as validate_component, d as add_attribute, f as createEventDispatcher, e as escape, h as each } from './index2-f68ebe74.js';

const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `<article class="${"m-0 p-0 mb-4"}"><nav><ul><li><a class="${"ml-2 pl-3 pr-3"}" href="${"#"}" aria-label="${"Open main menu"}"><svg aria-hidden="${"true"}" focusable="${"false"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" height="${"16px"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><line x1="${"3"}" y1="${"12"}" x2="${"21"}" y2="${"12"}"></line><line x1="${"3"}" y1="${"6"}" x2="${"21"}" y2="${"6"}"></line><line x1="${"3"}" y1="${"18"}" x2="${"21"}" y2="${"18"}"></line></svg></a></li></ul>
    <ul><li>Arniva Tur
      </li></ul>
    <ul><li><details role="${"list"}" dir="${"rtl"}" class="${"mr-2"}"><summary class="${"noafter noborder"}" aria-haspopup="${"listbox"}"><svg width="${"24px"}" height="${"24px"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path d="${"M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"}" stroke="${"#1095c1"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></g></svg></summary>
          <ul role="${"listbox"}"><li><a href="${"/logout"}">Çıkış Yap</a></li></ul></details></li></ul></nav></article>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navdata } = $$props;
  const { role, menu, username } = navdata;
  createEventDispatcher();
  if ($$props.navdata === void 0 && $$bindings.navdata && navdata !== void 0)
    $$bindings.navdata(navdata);
  return `<article class="${"h-100 m-0 p-8"}"><div class="${"flex flex-justify-between mb-8"}">${escape(username)}
      <a href="${"#"}" class="${"mob-visible hidden"}" type="${"button"}" aria-label="${"Open main menu"}"><svg width="${"24px"}" height="${"24px"}" viewBox="${"0 0 1024 1024"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"#0f95c1"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path fill="${"#0f95c1"}" d="${"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"}"></path></g></svg></a></div>

    <nav><ul>${each(menu, (item) => {
    return `<li><a class="${"font-sm"}" data-sveltekit-preload-data${add_attribute("href", item.path, 0)}>${item.icon ? `<img class="${"menu-icon"}" src="${"/icons/" + escape(item.icon, true) + ".svg"}" alt="${""}">` : ``}
              <span>${escape(item.name)}</span></a>
          </li>`;
  })}</ul></nav></article>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let collapsed, smallDevice, sidebar, innerWidth = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  smallDevice = innerWidth < 768;
  collapsed = smallDevice;
  return `

<div class="${"grid-container"}"><header>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header>
    <aside class="${["sidenav", collapsed ? "collapsed" : ""].join(" ").trim()}"${add_attribute("this", sidebar, 0)}>${validate_component(Sidebar, "Sidebar").$$render($$result, { navdata: data }, {}, {})}</aside>
    <main class="${"main"}"><div class="${"container"}">${slots.default ? slots.default({}) : ``}</div></main>
    <footer class="${"footer font-xs text-muted"}">ARNIVA © 2023 | Her hakkı saklıdır.</footer></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-b7e9633e.js.map
