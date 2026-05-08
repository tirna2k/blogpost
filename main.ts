export const homePageUrl = new URL("./index.html", import.meta.url);

export async function renderHomePage(): Promise<string> {
  return await Deno.readTextFile(homePageUrl);
}

export function createHomePageResponse(html: string): Response {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

if (import.meta.main) {
  const requestedPort = Number(Deno.args[0] ?? "8000");
  const port = Number.isInteger(requestedPort) ? requestedPort : 8000;
  const html = await renderHomePage();

  console.log(`Serving The Journal homepage at http://localhost:${port}`);
  Deno.serve({ port }, () => createHomePageResponse(html));
}
