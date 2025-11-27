export const GET = async ({ params }) => {
  console.log({ params });
  return new Response(JSON.stringify({ message: "hello from sv api" }), {
    status: 200,
  });
};

export const POST = async ({ params }) => {
  console.log({ params });
  return new Response(JSON.stringify({ message: "hello from sv api" }), {
    status: 201,
  });
};
