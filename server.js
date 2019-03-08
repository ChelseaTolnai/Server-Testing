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

server.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employees.getById(req.params.id);
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json(err);
    }
});

server.post('/employees', async (req, res) => {
    try {
        const employee = await Employees.insert(req.body);
        res.status(201).json(employee);
    } catch (err) {
        res.status(500).json(err);
    }
});

server.delete('/employees/:id', async (req, res) => {
    try {
        const count = await Employees.remove(req.params.id);
        res.status(200).json({ message: 'Number of Employees deleted', count });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = server;