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
writeFile("file.txt", "Hello Dev Sqad!");
writeFile("script.js", "console.log('Hello World!')");
writeFile(
  "App.jsx",
  "import React from react \n export default function App(){return(<>App Component</>)}"
);

// const writeFolder = () => {
//   fs.mkdirSync("emanuela");
// };

// writeFolder();
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

const testFileContent = readFile("test.txt");
console.log('testFileContent:',testFileContent);