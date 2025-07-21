// Reading the contents of a file

/* Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
 */

const fs = require("fs");

/* Reading a file with callbacks */
// Read file asynchronously with callback
fs.readFile("myfile.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
    return;
  }

  console.log("File Content: ", data);
});

// For binary data (like message), omit the encoding
fs.readFile("facebook.png", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Image Size: ", data.length, "bytes");
});

/* Reading a file with Promise */
// Reading a file with async/await

async function readFileExample() {
  try {
    const data = await fs.promises.readFile("myfile.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileExample();

// Read file synchronously
try {
  const data = fs.readFileSync("myfile.txt", "utf8");
  console.log("File content:", data);
} catch (err) {
  console.error("Error reading file:", err);
}
