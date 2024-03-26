const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first + "\n" + second);
writeFileSync(
  "./content/result-sync.txt",
  `here is result ${first},${second}`,
  { flag: "a" }
);

// Here adding flag makes sure that new content is appended at end
