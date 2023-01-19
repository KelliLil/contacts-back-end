// Express is a web framework for Node.js
// Primarily used to route users to diff pages/responses

import express from "express";
import contactsRouter from "./contacts/routes.js";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
