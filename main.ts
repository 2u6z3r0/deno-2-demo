import cowsay from "cowsay";
export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 1 + 2 =", add(2, 3));
}
console.log("Module B's import.meta.url", import.meta.url);
console.log("Module B's mainModule url", Deno.mainModule);
console.log("Module B's mainModule filename", import.meta.filename);

console.log("Add 4 + 5 =", add(4, 5));

console.log(cowsay.say({
  text: "Hello from Deno!",
}));
