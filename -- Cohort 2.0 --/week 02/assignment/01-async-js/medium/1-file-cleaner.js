// File cleaner
/*
    Read a file, remove all the extra spaces and write it back to the same file.
    For example, if the file input was
    ```
    hello     world    my    name   is       raman
    ```
    After the program runs, the output should be
    ```
    hello world my name is raman
    ```
*/

const { readFile } = require("fs");

// Using callback
/* 
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error Occured");
    return;
  }

  const cleaned = data.replace(/\s+/g, " ").trim();

  fs.writeFile("file.txt", cleaned, "utf8", (err) => {
    if (err) {
      console.error("Error writing myfile.txt: ", err);
    }

    console.log("file.txt edited successfully");
  });
});
 */

// Using Promises

const fs = require("fs").promises;

async function modifyChange() {
  try {
    const data = await fs.readFile("file.txt", "utf8");
    const cleaned = data.replace(/\s+/g, " ").trim();
    await fs.writeFile("file.txt", cleaned, "utf8");
    console.log("file.txt edited successfully");
  } catch (err) {
    console.log(err);
  }
}

modifyChange();
