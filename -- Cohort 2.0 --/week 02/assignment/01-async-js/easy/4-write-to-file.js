// Write to a file

/* Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require("fs");

// Writing a file with a callback
function writeFileExample() {
  // write text to a file
  fs.writeFile("myfile2.txt", "Hello, World!", "utf-8", (err) => {
    if (err) {
      return console.error("Error writing myfile.txt: ", err);
    }

    console.log("myfile.txt created successfully");
  });
}

writeFileExample();

async function writeFileExample2() {
  try {
    await fs.promises.writeFile("myfile2.txt", "Hi! World", "utf8");

    const data = { name: "john", age: 30, city: "New York" };
    await fs.promises.writeFile(
      "data.json",
      JSON.stringify(data, null, 2),
      "utf8"
    );

    console.log("Files created successfully");
  } catch (err) {
    console.error("Error writing files:", err);
  }
}

writeFileExample2();
