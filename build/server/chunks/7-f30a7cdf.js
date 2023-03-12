import { r as redirect, D as DEV } from './index-d97491b4.js';
import { A as APIURL } from './app.config-a561b127.js';

const dev = DEV;
class Authentication {
  token;
  constructor() {
    this.token = "";
  }
  static check = async (username, password) => {
    const body = {
      versionno: "2.6",
      usercode: username,
      password
    };
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(body)
    };
    const response = await fetch(`${APIURL}/login`, requestOptions).then((response2) => response2.json());
    return response.data;
  };
  async login(username, password, cookies, locals) {
    const user = await Authentication.check(username, password);
    if (user) {
      locals.user = user;
      const isadmin = user.isadmin || (user.params.rehber_kodu == "ENES1" ? 1 : 0);
      cookies.set("token", user.token, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: !dev,
        maxAge: 60 * 60 * 24 * 30
      });
      cookies.set("isadmin", isadmin, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: !dev,
        maxAge: 60 * 60 * 24 * 30
      });
      cookies.set("username", user.params.rehber_kodu, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: !dev,
        maxAge: 60 * 60 * 24 * 30
      });
      const pages = [
        ["/home", "/sales"],
        ["/dashboard", "/report"]
      ];
      throw redirect(303, pages[isadmin][0]);
    }
    cookies.delete("token");
    return false;
  }
}
const Auth = new Authentication();
const load = async () => {
  return {};
};
const actions = {
  default: async ({ request, cookies, locals }) => {
    const { username, password } = Object.fromEntries(await request.formData());
    await Auth.login(username, password, cookies, locals);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-29045b56.js')).default;
const file = '_app/immutable/entry/(auth)-login-page.svelte.4176eb26.js';
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = ["_app/immutable/entry/(auth)-login-page.svelte.4176eb26.js","_app/immutable/chunks/index.bc7c65c9.js","_app/immutable/chunks/monetize.26b98f74.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.49a35693.js","_app/immutable/chunks/index.53433d2b.js","_app/immutable/chunks/navigation.f5e505e3.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-f30a7cdf.js.map
