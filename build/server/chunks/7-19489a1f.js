import { A as APIURL } from './app.config-ce0fd6f0.js';
import { r as redirect } from './index-1dce6fb5.js';

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
  async login(username, password) {
    const user = await Authentication.check(username, password);
    if (user) {
      return user;
    }
    return false;
  }
}
const Auth = new Authentication();
const pages = [
  ["/home", "/sales"],
  ["/dashboard", "/report"]
];
let msg = null;
const load = async () => {
  return {
    msg
  };
};
const actions = {
  default: async ({ request, cookies }) => {
    const { username, password } = Object.fromEntries(await request.formData());
    const user = await Auth.login(username, password);
    if (user) {
      const isadmin = user.isadmin || (user.params.rehber_kodu == "ENES1" ? 1 : 0);
      cookies.set("token", user.token, {
        secure: false,
        maxAge: 60 * 60 * 24 * 30
      });
      cookies.set("isadmin", isadmin, {
        secure: false,
        maxAge: 60 * 60 * 24 * 30
      });
      cookies.set("username", user.params.rehber_kodu, {
        secure: false,
        maxAge: 60 * 60 * 24 * 30
      });
      throw redirect(303, pages[isadmin][0]);
    } else {
      msg = "Sunucuya erişim izniniz yok.";
      cookies.delete("token");
      cookies.delete("isadmin");
      cookies.delete("username");
      throw redirect(303, "/login");
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-663fb824.js')).default;
const file = '_app/immutable/entry/(auth)-login-page.svelte.87f40abc.js';
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = ["_app/immutable/entry/(auth)-login-page.svelte.87f40abc.js","_app/immutable/chunks/index.e58ce54e.js","_app/immutable/chunks/monetize.363172c8.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.6943d2ca.js","_app/immutable/chunks/index.76836604.js","_app/immutable/chunks/navigation.489e6dcc.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-19489a1f.js.map
