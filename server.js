const express = require('express');

const Employees = require('./employees/employeesModel')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: "Server working" });
});

server.get('/employees/', async (req, res) => {
    try {
        const employees = await Employees.getAll();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json(err);
    }
});

server.get("/employees/:id", (req, res) => {
    return null
});

server.post("/employees", (req, res) => {
    return null
});

server.delete("/employees/:id", (req, res) => {
    return null
});

module.exports = server;