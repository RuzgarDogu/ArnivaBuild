import { c as create_ssr_component, e as escape, h as each } from './index2-f68ebe74.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { tickets, packet, monetize } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="${"container"}"><nav><ul><li><h3 class="${"mb-4"}">Tickets</h3></li></ul>
        <ul><li><a role="${"button"}" data-sveltekit-preload-data class="${"secondary"}" href="${"/sales"}"><svg width="${"24px"}" height="${"24px"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"#ffffff"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><g><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"}"></path></g></g></svg></a></li>            
          <li><a href="${"/sales/add"}" role="${"button"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"16px"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"3"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><line x1="${"12"}" y1="${"5"}" x2="${"12"}" y2="${"19"}"></line><line x1="${"5"}" y1="${"12"}" x2="${"19"}" y2="${"12"}">&#39;</line></svg>
              Ekle</a></li></ul></nav>

      <div><details><summary><span>${escape(packet.musteriadi)}</span></summary>
            
            <article class="${"m-0 mb-2 contrast"}"><div class="${"flex flex-justify-between font-sm"}"><span class="${"text-ellipsis pr-2"}"><span>${escape(packet.oteladi)}</span>  <span class="${"text-blue"}">#${escape(packet.odano)}</span></span>
                    <span class="${"text-ellipsis pr-2"}">${escape(packet.nettoplamtutardov)}</span></div>
                <p class="${"mb-0 font-xs"}"><span class="${"text-muted"}">${escape(packet.zaman.split("T")[0])}</span>
                    <span>${escape(packet.zaman.split("T")[1].split(".")[0])}</span></p></article></details></div>

    <div class="${"grid grid-3 mob-grid-1"}">${each(tickets, (ticket, i) => {
    return `<a class="${"link-unset"}" href="${"/sales/" + escape(packet.id, true) + "/" + escape(ticket.id, true)}"><article class="${"m-0 mb-2"}"><header class="${"flex flex-justify-between pb-4 pt-4 mb-4"}"><span class="${"text-ellipsis pr-2"}">${escape(ticket.bttur_adi)}</span>
                    <span class="${"text-green font-sm"}">${escape(ticket.biletno)}</span></header>
                <div class="${"flex flex-justify-between font-sm"}"><span class="${"text-ellipsis pr-2"}">${escape(ticket.tam)} + ${escape(ticket.yarim)} + ${escape(ticket.ucretsiz)}</span>
                    <span class="${"text-ellipsis pr-2"}">${escape(ticket.resttutardov.monetize())}</span></div>
                <p class="${"mb-0 font-xs"}"><span class="${"text-muted"}">${escape(ticket.zaman.split("T")[0])}</span>
                    <span>${escape(ticket.zaman.split("T")[1].split(".")[0])}</span>
                </p></article>
        </a>`;
  })}</div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e5ef2c88.js.map
