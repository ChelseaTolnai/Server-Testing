const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {

        it('should return 200 OK', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })

        it('should return JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });

        it('should return { api: "up" }', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ message: "Server working" });
        });

    });

    describe('GET /employees', () => {

        it('should return 200 OK', async () => {
            const res = await request(server).get('/employees');
            expect(res.status).toBe(200);
        })

        it('should return JSON', async () => {
            const res = await request(server).get('/employees');
            expect(res.type).toBe('application/json');
        });

        it('should return array of employees', async () => {
            const res = await request(server).get('/employees');
            expect(res.body).toBeDefined;
            expect(res.body).toHaveLength;
        });

    });

    describe('GET /employee/:id', () => {

        it('should return 200 OK', async () => {
            const res = await request(server).get('/employees/:id');
            expect(res.status).toBe(200);
        })

        it('should return JSON', async () => {
            const res = await request(server).get('/employees/:id');
            expect(res.type).toBe('application/json');
        });

        it('should return employee by specified id', async () => {
            const res = await request(server).get('/employees/:id');
            expect(res.body).toBeDefined;
            expect(res.body.id).toBeDefined;
            expect(res.body.name).toBeDefined;
            expect(res.body.jobTitle).toBeDefined;
        });

    });

    describe('POST /employee', () => {

        it('should return 200 OK', async () => {
            const newEmployee = { name: 'Ryan Bartell', jobTitle: 'Senior Data Manager' }
            const res = await request(server).post('/employees').send(newEmployee);
            expect(res.status).toBe(201);
        })

        it('should return JSON', async () => {
            const res = await request(server).post('/employees');
            expect(res.type).toBe('application/json');
        });

        it('should input new employee and return that added employee', async () => {
            const newEmployee = { name: 'Ryan Bartell', jobTitle: 'Senior Data Manager' }
            const res = await request(server).post('/employees').send(newEmployee);
            expect(res.body).toBeDefined;
            expect(res.body.name).toBe(newEmployee.name);
            expect(res.body.jobTitle).toBe(newEmployee.jobTitle);
        });

    });

    describe('DELETE /employee/:id', () => {

        it('should return 200 OK', async () => {
            const newEmployee = { name: 'Ryan Bartell', jobTitle: 'Senior Data Manager' }
            const post = await request(server).post('/employees').send(newEmployee);
            const res = await request(server).delete(`/employees/${post.body.id}`);
            expect(res.status).toBe(200);
        })

        it('should return JSON', async () => {
            const res = await request(server).delete('/employees/:id');
            expect(res.type).toBe('application/json');
        });

        it('should delete employee by specified id and return count of deleted', async () => {
            const newEmployee = { name: 'Ryan Bartell', jobTitle: 'Senior Data Manager' }
            const post = await request(server).post('/employees').send(newEmployee);
            const res = await request(server).delete(`/employees/${post.body.id}`);
            expect(res.body.message).toBeDefined;
            expect(res.body.count).toBe(1);
        });

    });

});