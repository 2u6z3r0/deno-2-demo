import hono from "hono";
import { serve } from "@hono/node-server";

const app = new hono();
app.get("/", (c) => c.text("Hello Hono!"));
app.get("/hello", (c) => c.text("Hello Hono!"));
app.get("/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.text(`Hello ${name}!`);
});
app.get("/hello/:name/:age", (c) => {
  const name = c.req.param("name");
  const age = c.req.param("age");
  return c.text(`Hello ${name}! You are ${age} years old!`);
});

const port = 3000;
serve({ port, fetch: app.fetch });
console.log(`Server running at http://localhost:${port}/`);
// To run this code, use the following command:
