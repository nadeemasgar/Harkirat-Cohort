/*   - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)
 */

const express = require("express");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const readFile = async (req, res, next) => {
  let data;
  try {
    data = await fs.readFile("./todos.json", "utf8");
    req.todos = JSON.parse(data);
    next();
  } catch (err) {
    next(err);
  }
};

const writeFileHelper = async (todos, next) => {
  try {
    await fs.writeFile("./todos.json", JSON.stringify(todos), "utf8");
    return { status: "success", message: "Changes saved" };
  } catch (err) {
    next(err);
  }
};

app.use(readFile);

app.get("/todos", async (req, res) => {
  const todos = req.todos;
  if (todos) {
    return res.status(200).json(todos);
  } else {
    res.status(200).send("No data found");
  }
});

app.post("/todos", async (req, res, next) => {
  const data = req.body;
  const id = uuidv4();
  const todos = req.todos;

  todos.push({ id, ...data });

  const result = await writeFileHelper(todos, next);

  if (result) res.status(200).json(result);
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;

  const todos = req.todos;

  const todo = todos.find(({ id: todoID }) => todoID === id);

  if (todo) {
    return res.status(200).send(todo);
  } else {
    return res.status(404).send("Not Found");
  }
});

app.put("/todos/:id", async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;

  const todos = req.todos;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).send("Not Found");
  }

  for (let key in updates) {
    if (key in todos[todoIndex]) {
      todos[todoIndex][key] = updates[key];
    }
  }

  const result = await writeFileHelper(todos, next);

  if (result) res.status(200).json(result);
});

app.delete("/todos/:id", async (req, res, next) => {
  const id = req.params.id;

  const todos = req.todos;

  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
   return res.status(404).json({ error: "Todo Not Found" });
  }

  todos.splice(index, 1);

  const result = await writeFileHelper(todos, next);

  if (result) res.status(200).json(result);
});

app.use((req, res) => {
  res.status(404).send("Route Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Error Occurred", details: err.message });
});

app.listen(3000);

module.exports = app;
