export async function GET() {
  const res = await fetch(
    "https://zenn.dev/api/articles?username=islaree&order=latest",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
