// export function add(a: number, b: number): number {
//   return a + b;
// }

// // Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log("Add 2 + 3 =", add(2, 3));
// }

import { route, type Route } from "@std/http/unstable-route";

import sqlite from "node:sqlite";

const routes: Route[] = [
  {
    pattern: new URLPattern({pathname: "/hello"}),
    handler: () => new Response("Hello, World!")
  }
]

const defaultHandler = () => {
  return new Response("route not found!")
}

// synchronously initialize database

const db = new sqlite.DatabaseSync("sporeshore.db");

await Deno.serve(route(routes, defaultHandler))