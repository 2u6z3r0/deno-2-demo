import express from "npm:express";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

const loggerMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Middleware to log requests
app.use(loggerMiddleware);

// Basic route
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, Deno with Express2!");
});

// Example API route
app.get("/api", (_req: express.Request, res: express.Response) => {
  res.json({ message: "Welcome to the API2!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
