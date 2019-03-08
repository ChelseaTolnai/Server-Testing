const db = require('../data/dbConfig');
const faker = require('faker');

const Employees = require('./employeesModel');

describe('employee model', () => {

    describe('getAll()', () => {
        afterEach(async () => {
            await db('employees').truncate();
        })

        it('should get list of all employees', async () => {
            const employees = await Employees.getAll();
            expect(employees).toHaveLength(4);
        });

    });
});