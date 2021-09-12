describe('Primitive values', () => {
    it('should test jest assertions', () => {
        const number = 10;

        expect(number).toBe(10); // Não works to Objects
        expect(number).toEqual(10); // It works to Objects

        expect(number).not.toBeNull();
        expect(number).not.toBeFalsy();
        expect(number).toBeTruthy();

        expect(number).toBeGreaterThan(9);
        expect(number).toBeGreaterThanOrEqual(10);
        expect(number).toBeLessThan(11);
        expect(number).toBeLessThanOrEqual(10);


        expect(number).toBeCloseTo(10.0001);

        expect(number).toHaveProperty('toString');

    });
});

describe('Name of the group', () => {
    it('should test jest assertions with objects', () => {
        const person = { name: 'Luiz', age: 30 };
        const anotherPerson = { ...person };

        expect(person).toEqual(anotherPerson);
        expect(person).toHaveProperty('age');
        expect(person).not.toHaveProperty('lastName');
        expect(person).toHaveProperty('name', 'Luiz');

        expect(person.name).toBe('Luiz');
    });
});