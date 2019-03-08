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

});