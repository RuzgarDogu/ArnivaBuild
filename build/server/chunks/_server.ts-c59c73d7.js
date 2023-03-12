import { A as APIURL } from './app.config-a561b127.js';

const GET = async ({ cookies, url }) => {
  const token = cookies.get("token") || "";
  const regionid = url.searchParams.get("regionid") || "";
  const tourgroupid = url.searchParams.get("tourgroupid") || "";
  const apiurl = new URL("/tours", APIURL);
  apiurl.searchParams.append("tourgroupid", tourgroupid);
  apiurl.searchParams.append("regionid", regionid);
  const res = await fetch(apiurl, {
    method: "GET",
    headers: {
      "token": token
    }
  }).then((res2) => res2.json());
  const data = res.data || [];
  return new Response(JSON.stringify(data), { status: 200 });
};

export { GET };
//# sourceMappingURL=_server.ts-c59c73d7.js.map
