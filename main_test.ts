import { assertEquals, assertStringIncludes } from "@std/assert";
import { createHomePageResponse, renderHomePage } from "./main.ts";

Deno.test("renderHomePage loads the cloned homepage", async () => {
  const html = await renderHomePage();

  assertStringIncludes(html, "<title>The journal By Tirna - Home</title>");
  assertStringIncludes(html, "The journal By Tirna");
  assertStringIncludes(
    html,
    "The Journal by Tirna Chakraborty, All rights reserved",
  );
  assertStringIncludes(html, "The Shifting Tides of Diplomacy");
  assertStringIncludes(html, "The Renaissance of Minimalist Expression");
});

Deno.test("createHomePageResponse returns html", async () => {
  const response = createHomePageResponse(
    "<!DOCTYPE html><h1>The Journal</h1>",
  );

  assertEquals(response.status, 200);
  assertEquals(
    response.headers.get("content-type"),
    "text/html; charset=utf-8",
  );
  assertEquals(await response.text(), "<!DOCTYPE html><h1>The Journal</h1>");
});
