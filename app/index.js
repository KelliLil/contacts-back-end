// Express is a web framework for Node.js
// Primarily used to route users to diff pages/responses

import express from "express";

const CONTACTS = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const app = express();

app.get("/api/contacts", (_, response) => {
  response.json(CONTACTS);
});

// ':id' is a route parameter
app.get("/api/contacts/:id", (request, response) => {
  const { id } = request.params;
  const contact = CONTACTS.find((contact) => contact.id === Number(id));

  if (contact) {
    response.json(contact);
  } else {
    response.status(404).json({ message: "contact not found" });
  }
});

// Express uses middleware to parse body of request
// This is required to access the body of a POST request
app.use(express.json());

app.put("/api/contacts/:id", (request, response) => {
  const { id } = request.params;
  const updatedContact = request.body;

  // Use map to update contact
  const updatedContacts = CONTACTS.map((contact) => {
    if (contact.id === Number(id)) {
      console.log("updating");
      return updatedContact;
    }

    return contact;
  });

  response.json(updatedContacts);
});

app.post("/api/contacts", (request, response) => {
  console.log(request.body);
  response.send("ok");
});

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
