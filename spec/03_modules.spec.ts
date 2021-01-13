import { Employee, Retiree } from "../src/hr";

describe('modules and stuff', () => {

        it('using a module to host a class', () => {
            const will = new Employee('Will', 'Hill', 'IT');

            expect(will.firstName).toBe('Will');
            expect(will.lastName).toBe('Hill');
            expect(will.fullName).toBe('Hill, Will');

            will.firstName = "Mike";
            expect(will.firstName).toBe('Mike');
            expect(will.fullName).toBe('Hill, Mike');

            expect(will.department).toBe('IT');
            expect(will.salary).toBe(100_000);
            will.giveRaise(1000);
            expect(will.salary).toBe(101_000);
        });

            it('creating a retiree', () => {
                const will = new Retiree('Will', 'Hill', 'IT');

                expect(will.firstName).toBe('Will');
                expect(will.lastName).toBe('Hill');
                expect(will.fullName).toBe('Hill, Will');
    
                will.firstName = "Mike";
                expect(will.firstName).toBe('Mike');
                expect(will.fullName).toBe('Hill, Mike');
    
                expect(will.pension).toBe(100_000);
    
            });

});