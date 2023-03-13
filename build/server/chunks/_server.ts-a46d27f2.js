import { A as APIURL } from './app.config-ce0fd6f0.js';

const GET = async ({ cookies, url }) => {
  const token = cookies.get("token") || "";
  const packetid = url.searchParams.get("packetid") || "";
  const apiurl = new URL("/tickets", APIURL);
  apiurl.searchParams.append("prPacketId", packetid);
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
//# sourceMappingURL=_server.ts-a46d27f2.js.map
