# The Journal Homepage

A small Deno-served homepage that clones the dark editorial "The Journal"
layout.

## Requirements

- Deno

## Commands

```powershell
deno task start
deno task dev
deno task test
deno task check
```

The site runs locally at `http://localhost:8000`.

## Structure

- `index.html` contains the homepage markup and styling.
- `main.ts` serves the homepage.
- `main_test.ts` checks the homepage response.
- `deno.json` defines tasks, imports, and TypeScript settings.
