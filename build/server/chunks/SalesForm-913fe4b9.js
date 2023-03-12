import { c as create_ssr_component, f as createEventDispatcher, e as escape, h as each, d as add_attribute } from './index2-f68ebe74.js';

const SalesForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Arniva", formdata } = $$props;
  let { packet } = $$props;
  let { formcontent } = $$props;
  createEventDispatcher();
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.formdata === void 0 && $$bindings.formdata && formdata !== void 0)
    $$bindings.formdata(formdata);
  if ($$props.packet === void 0 && $$bindings.packet && packet !== void 0)
    $$bindings.packet(packet);
  if ($$props.formcontent === void 0 && $$bindings.formcontent && formcontent !== void 0)
    $$bindings.formcontent(formcontent);
  return `<form method="${"POST"}"><div class="${"mb-3"}"><h3 class="${"m-0"}">${escape(title)}</h3></div>
    <select name="${"region"}" required><option value="${""}" selected>Bölge seç</option>${each(formcontent.regions, (region) => {
    return `<option${add_attribute("value", region.id, 0)}>${escape(region.kodu)}</option>`;
  })}</select>
    <select name="${"tour"}" required ${formcontent.tours.length == 0 ? "disabled" : ""}><option value="${""}" selected>Tur seç</option>${each(formcontent.tours, (tour) => {
    return `<option${add_attribute("value", tour.id, 0)}>${escape(tour.kodu)}</option>`;
  })}</select>
    <select name="${"operator"}" required ${formcontent.operators.length == 0 ? "disabled" : ""}><option value="${""}" selected>Operatör seç</option>${each(formcontent.operators, (operator) => {
    return `<option${add_attribute("value", operator.id, 0)}>${escape(operator.kodu)}</option>`;
  })}</select>
    <div class="${"grid grid-2"}"><input name="${"date"}" type="${"date"}">
        <input name="${"time"}" type="${"time"}"></div>
    <input name="${"notes"}" type="${"text"}" placeholder="${"Notlar"}">
    <div class="${"grid grid-3"}"><input name="${"full"}" type="${"number"}" placeholder="${"Full"}">
        <input name="${"half"}" type="${"number"}" placeholder="${"Half"}">
        <input name="${"free"}" type="${"number"}" placeholder="${"Free"}"></div>
    <div class="${"grid grid-2"}"><button class="${"mb-0"}" type="${"submit"}" role="${"button"}">Kaydet</button>
        <a href="${"/sales"}" role="${"button"}" class="${"contrast"}">İptal</a></div></form>`;
});

export { SalesForm as S };
//# sourceMappingURL=SalesForm-913fe4b9.js.map
