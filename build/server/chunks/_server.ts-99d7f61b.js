const GET = async () => {
  const response = {
    code: 404,
    message: "Not Found",
    data: null
  };
  return new Response(JSON.stringify(response), { status: 400 });
};

export { GET };
//# sourceMappingURL=_server.ts-99d7f61b.js.map
