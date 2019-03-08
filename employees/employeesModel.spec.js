const db = require('../data/dbConfig');
const faker = require('faker');

const Employees = require('./employeesModel');

describe('employee model', () => {

    describe('getAll()', () => {

        it('should get list of all employees', async () => {
            const employees = await Employees.getAll();
            expect(employees).toHaveLength(4);
            expect(employees[3]).toEqual({id: 4, name: 'Cheyenne Emard', jobTitle: 'Global Integration Technician'})
        });

    });

    describe('getById()', () => {

        it('should get employee by specific id', async () => {
            const employee1 = await Employees.getById(1);
            expect(employee1.id).toBe(1);
            expect(employee1.name).toBe('Drew Konopelski');
            expect(employee1.jobTitle).toBe('Human Solutions Strategist');
        });

    });
});