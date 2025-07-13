- MongoDB URL -> mongodb+srv://admin:Nadeem@123@cluster0.xpmnqir.mongodb.net/
- Neon PostgresSQL - psql 'postgresql://neondb_owner:npg_pTmXP91fHIli@ep-divine-flower-adf2adt7-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

**Custom Middleware Pattern**

- This snippet shows how to define reusable middleware functions and use them in multiple routes.
- You can reuse them in any route and it Promotes clean, modular code.
- Middleware can be reused across multiple routes for authentication, validation, logging, etc.

```js
    function userMiddleware(req, res, next) { ... }
    function kidneyMiddleware(req, res, next) { ... }

    app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
        res.send("Your heart is healthy");
    });
```

**Inline Middleware Pattern**

- This snippet defines inline middleware directly inside the route definition.
- Middleware is not reusable unless moved out and More concise for small tasks, but can get messy in large apps.
- Useful for simple logging, testing, or one-off behaviors.

```js
app.get(
  "/health-checkup",
  (req, res, next) => {
    console.log("hi from req1");
    next();
  },
  (req, res, next) => {
    console.log("hi from req2");
    next();
  },
  (req, res) => {
    console.log("hi from req2");
    res.send("Health check completed");
  }
);
```

**app.use()**
