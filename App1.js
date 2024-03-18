const { readFile, writeFile } = require("fs");

console.log("Started reading file!");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile("./content/third.txt", `${first}${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      console.log("Done with the file");
    });
  });
});
console.log("Last Process");
