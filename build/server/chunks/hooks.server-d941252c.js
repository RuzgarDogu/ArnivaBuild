import { r as redirect } from './index-1dce6fb5.js';

const unProtectedRoutes = ["/login", "/logout"];
const pages = [
  ["/home", "/sales"],
  ["/dashboard", "/report"]
];
const handle = async ({ event, resolve }) => {
  const token = event.cookies.get("token") || null;
  if (event.url.pathname == "/logout") {
    event.cookies.delete("token");
    event.cookies.delete("isadmin");
    event.cookies.delete("username");
    event.locals.user = null;
    throw redirect(303, "/login");
  }
  const index = event.cookies.get("isadmin") ? Number(event.cookies.get("isadmin")) : 2;
  event.locals.isadmin = index;
  event.locals.token = token;
  event.locals.username = event.cookies.get("username") || "";
  if (!unProtectedRoutes.includes(event.url.pathname) && !token || event.url.pathname === "/logout" && token) {
    event.cookies.delete("token");
    event.locals.user = null;
    throw redirect(303, "/login");
  } else if (event.url.pathname === "/" && token) {
    throw redirect(303, pages[index][0]);
  }
  return resolve(event);
};
const handleFetch = async ({ request, fetch }) => {
  const res = await fetch(request);
  if ([401, 403, 205].includes(res.status)) {
    throw redirect(303, "/login");
  }
  return res;
};

export { handle, handleFetch };
//# sourceMappingURL=hooks.server-d941252c.js.map
