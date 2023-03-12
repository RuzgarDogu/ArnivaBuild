import { c as create_ssr_component, e as escape, h as each, d as add_attribute } from './index2-f68ebe74.js';
import 'moment';
import './utils-ae3035df.js';
import './monetize-999b067f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedbranchesText;
  let { data } = $$props;
  let { branches, groupedSales } = data;
  let selectedbranches = branches.map((branch) => branch.id);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    console.log(data);
  }
  ({ groupedSales } = data);
  selectedbranchesText = selectedbranches.map((id) => branches.find((branch) => branch.id === id).kodu).join(", ");
  return `<form method="${"POST"}"><details role="${"list"}"><summary class="${"text-ellipsis font-xs"}" aria-haspopup="${"listbox"}">${escape(selectedbranchesText)}</summary>
        <ul role="${"listbox"}">${each(branches, (branch) => {
    return `<li><label><input type="${"checkbox"}"${add_attribute("value", branch.id, 0)}${~selectedbranches.indexOf(branch.id) ? add_attribute("checked", true, 1) : ""}>
                    ${escape(branch.kodu)}</label>
            </li>`;
  })}</ul>
        <input name="${"branches"}" type="${"hidden"}"${add_attribute("value", selectedbranches, 0)}></details></form>

<section class="${"p-2"}">${each(groupedSales, (sales) => {
    return `<details class="${"mb-2 pb-2"}"><summary class="${"font-sm"}"><span class="${"block"}">${escape(sales.name)}</span>
                <small class="${"text-muted"}">${each(sales.toplamtutardov, (dov) => {
      return `<code class="${"mr-2 mt-1"}">${escape(dov.doviz_kodu)} ${escape(dov.tutar.monetize())}</code>`;
    })}
                </small></summary>
                <figure><table role="${"grid"}"><thead><tr><th class="${"font-xs"}" scope="${"col"}">Tutar</th>
                        <th class="${"font-xs"}" scope="${"col"}">Tarih</th>
                        <th class="${"font-xs"}" scope="${"col"}">Otel</th>
                        <th class="${"font-xs"}" scope="${"col"}">Adet</th>
                      </tr></thead>
                    <tbody>${each(sales.data, (data2) => {
      return `<tr><td class="${"font-xs"}">${escape(data2.toplamtutardov.monetize())} ${escape(data2.doviz_kodu)}</td>
                        <td class="${"font-xs"}">${escape(data2.tarih)}</td>
                        <td class="${"text-ellipsis font-xs"}">${escape(data2.oteladi)}</td>
                        <td class="${"font-xs"}">${escape(data2.biletsayisi)}</td>
                      </tr>`;
    })}</tbody>
                </table></figure>
          </details>`;
  })}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f58d91b3.js.map
