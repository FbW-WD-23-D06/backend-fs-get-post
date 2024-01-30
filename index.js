import fs from "node:fs";

/**
 * Create File with data.
 * @param {string} filePath - The path of the file to write to.
 * @param {string} data - The data to write to the file.
 * @returns {void}
 */

const writeFile = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

writeFile("test.txt", "Hello World!");
writeFile("script.js", "console.log('Hello World!')");

/**
 * Reads the content of a file synchronously.
 * @param {string} filePath - The path to the file.
 * @returns {string} - The content of the file.
 */

const readFile = (filePath) => {
  // utf-8 is the encoding of the file (default is utf-8) without it, it will return a buffer (binary data)
  return fs.readFileSync(filePath, "utf-8");
};

console.log(readFile("test.txt"));
console.log(readFile("script.js"));
