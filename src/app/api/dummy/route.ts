export async function GET() {
  return Response.json({
    data: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "John Smith" },
    ],
    meta: {
      current: 1,
      pageSize: 10,
      total: 1,
    },
  });
}
