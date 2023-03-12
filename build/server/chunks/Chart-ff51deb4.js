import { o as onDestroy, c as create_ssr_component, i as spread, j as escape_object, d as add_attribute } from './index2-f68ebe74.js';

const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
function useForwardEvents(getRef) {
  const destructors = [];
  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
function clean(props) {
  let { data, type, options, plugins, children, $$scope, $$slots, ...rest } = props;
  return rest;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { data = { datasets: [] } } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let { updateMode = void 0 } = $$props;
  let { chart = null } = $$props;
  let canvasRef;
  let props = clean($$props);
  onDestroy(() => {
    if (chart)
      chart.destroy();
    chart = null;
  });
  useForwardEvents();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.updateMode === void 0 && $$bindings.updateMode && updateMode !== void 0)
    $$bindings.updateMode(updateMode);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  return `<canvas${spread([escape_object(props)], {})}${add_attribute("this", canvasRef, 0)}></canvas>`;
});

export { Chart as C, useForwardEvents as u };
//# sourceMappingURL=Chart-ff51deb4.js.map
