import { A as APIURL } from './app.config-a561b127.js';

const POST = async ({ request, cookies }) => {
  const body = await request.json() || [];
  const token = cookies.get("token") || "";
  const uuids = body.map((str) => JSON.stringify(str).replace(/['"]+/g, ""));
  const raw = "[" + uuids.join(", ") + "]";
  const res = await fetch(`${APIURL}/report/sales`, {
    method: "POST",
    headers: {
      "token": token,
      "Content-Type": "application/json"
    },
    body: raw
  }).then((res2) => res2.json());
  const data = res.data || [];
  return new Response(JSON.stringify(data), { status: 200 });
};

export { POST };
//# sourceMappingURL=_server.ts-b5e8f137.js.map
