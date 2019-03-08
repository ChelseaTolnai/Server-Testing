const db = require('../data/dbConfig');
const faker = require('faker');

const Employees = require('./employeesModel');

describe('employee model', () => {

    beforeEach(async () => {
        await db('employees').truncate();
        const newEmployees = [
            { name: faker.name.findName(), jobTitle: faker.name.jobTitle() },
            { name: faker.name.findName(), jobTitle: faker.name.jobTitle() },
            { name: faker.name.findName(), jobTitle: faker.name.jobTitle() },
            { name: 'Cheyenne Emard', jobTitle: 'Global Integration Technician' }
        ]
        newEmployees.map(e => Employees.insert(e))
    })

    describe('getAll()', () => {

        it('should get list of all employees', async () => {
            const employees = await Employees.getAll();
            expect(employees).toHaveLength(4);
            expect(employees[3]).toEqual({id: 4, name: 'Cheyenne Emard', jobTitle: 'Global Integration Technician'})
        });

    });

    describe('getById()', () => {

        it('should get employee by specific id', async () => {
            const employee4 = await Employees.getById(4);
            expect(employee4.id).toBe(4);
            expect(employee4.name).toBe('Cheyenne Emard');
            expect(employee4.jobTitle).toBe('Global Integration Technician');
        });

    });

    describe('insert()', () => {

        it('should insert the employee into db and return employee', async () => {
            const newEmployee = { name: 'Ryan Bartell', jobTitle: 'Senior Data Manager' }
            const employee5 = await Employees.insert(newEmployee);

            expect(employee5.id).toBe(5);
            expect(employee5.name).toBe('Ryan Bartell');
            expect(employee5.jobTitle).toBe('Senior Data Manager');
        });

    });
});