import { A as APIURL } from './app.config-ce0fd6f0.js';

const POST = async ({ request, cookies }) => {
  const body = await request.json() || [];
  const token = cookies.get("token") || "";
  const raw = JSON.stringify(body);
  const res = await fetch(`${APIURL}/report/sales`, {
    method: "POST",
    headers: {
      "token": token,
      "Content-Type": "application/json"
    },
    body: raw
  }).then((res2) => res2.json());
  console.log("res", res);
  const data = res.data || [];
  return new Response(JSON.stringify(data), { status: 200 });
};

export { POST };
//# sourceMappingURL=_server.ts-f6ab722a.js.map
