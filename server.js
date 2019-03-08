const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: "Server working" });
});

server.get("/employees/", async (req, res) => {
    return null
});

server.get("/employees/:id", (req, res) => {
    return null
});

server.post("/employees", (req, res) => {
    return null
});

server.put("/employees/:id", (req, res) => {
    return null
});

server.delete("/employees/:id", (req, res) => {
    return null
});

module.exports = server;