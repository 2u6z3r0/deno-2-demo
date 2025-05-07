const fs = require("node:fs");

async function readFile() {
  try {
    const data = await fs.promises.readFile("example.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
