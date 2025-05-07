type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}

const posts = await getPosts();
console.log("posts", posts);

// commands
// deno network_access_demo.ts
// deno run --allow-net network_access_demo.ts
// deno run --allow-net="https://jsonplaceholder.typicode.com" network_access_demo.ts
