// Express is a web framework for Node.js
// Primarily used to route users to diff pages/responses

import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (_, res) => {
  res.send("<h1> About </h1>");
});

// Express uses middleware to parse body of request
// This is required to access the body of a POST request
app.use(express.json());

app.post("/api/contacts", (request, response) => {
  console.log(request.body);
  response.send("ok");
});

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
