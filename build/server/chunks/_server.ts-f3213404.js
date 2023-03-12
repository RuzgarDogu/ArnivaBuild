import { A as APIURL } from './app.config-a561b127.js';

const GET = async ({ cookies, url }) => {
  const token = cookies.get("token") || "";
  const apiurl = new URL("/report/general", APIURL);
  const startdate = url.searchParams.get("startdate") || "";
  const enddate = url.searchParams.get("enddate") || "";
  apiurl.searchParams.append("startdate", startdate);
  apiurl.searchParams.append("enddate", enddate);
  const res = await fetch(apiurl, {
    method: "GET",
    headers: {
      "token": token
    }
  }).then((res2) => res2.json());
  const data = res.data[0] || {};
  return new Response(JSON.stringify(data), { status: 200 });
};

export { GET };
//# sourceMappingURL=_server.ts-f3213404.js.map
