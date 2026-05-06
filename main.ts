export function greet(name = "Deno"): string {
  const trimmed = name.trim();
  const subject = trimmed.length > 0 ? trimmed : "Deno";

  return `Hello, ${subject}!`;
}

if (import.meta.main) {
  console.log(greet(Deno.args[0]));
}
