import { A as APIURL } from './app.config-a561b127.js';

const GET = async ({ cookies }) => {
  const token = cookies.get("token") || "";
  const res = await fetch(`${APIURL}/branches`, {
    method: "GET",
    headers: {
      "token": token
    }
  }).then((res2) => res2.json());
  const data = res.data || [];
  return new Response(JSON.stringify(data), { status: 200 });
};

export { GET };
//# sourceMappingURL=_server.ts-9fb7307b.js.map
