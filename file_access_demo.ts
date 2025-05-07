function readFile(path: string): string {
  return Deno.readTextFileSync(path);
}

function writeFile(path: string, content: string): void {
  Deno.writeTextFileSync(path, content);
}

console.log("readFile", readFile("file1.txt"));
console.log("readFile", readFile("file2.txt"));

export { readFile, writeFile };

// commands
// deno run file_access_demo.ts
// deno run --allow-read file_access_demo.ts
// deno run --allow-read="file1.txt" file_access_demo.ts
// deno run --allow-read --allow-write file_access_demo.ts

// # Allow reads from file foo.txt and bar.txt only
// deno run --allow-read=foo.txt,bar.txt script.ts

// # Allow reads from any file in any subdirectory of ./node_modules
// deno run --allow-read=node_modules script.ts
