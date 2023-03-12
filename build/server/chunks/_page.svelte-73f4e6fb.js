import { c as create_ssr_component } from './index2-f68ebe74.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
    <main class="${"container flex flex-vertical flex-justify-center h-screen"}"><article class="${"grid"}"><div><hgroup><h1>Giriş Yap</h1>
            <h2>Arniva Tur uygulamasına hoş geldiniz</h2></hgroup>
          <form method="${"POST"}"><input type="${"text"}" name="${"username"}" placeholder="${"Kullanıcı Adı"}" aria-label="${"Login"}" autocomplete="${"nickname"}" required>
            <input type="${"password"}" name="${"password"}" placeholder="${"Şifre"}" aria-label="${"Password"}" autocomplete="${"current-password"}">
            <fieldset><label for="${"remember"}"><input type="${"checkbox"}" role="${"switch"}" id="${"remember"}" name="${"remember"}">
                Beni hatırla
              </label></fieldset>
            <button type="${"submit"}" class="${"contrast"}">Giriş Yap</button></form></div>
        <div style="${"background-image: url(https://picocss.com/examples/sign-in/assets/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg); background-size: cover;"}"></div></article>
    </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-73f4e6fb.js.map
