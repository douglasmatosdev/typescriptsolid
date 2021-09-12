import { IndividualCustomer, EnterpriseCustomer } from './customer';


const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
    return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
    return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {

    it('should have firstName, lastName and cpf', () => {
        const sut = createIndividualCustomer('Luiz', 'Otavio', '111.111');
        expect(sut).toHaveProperty('firstName', 'Luiz');
        expect(sut).toHaveProperty('lastName', 'Otavio');
        expect(sut).toHaveProperty('cpf', '111.111');
    });

    it('should have method to get anme and idn for individual costumers', () => {
        const sut = createIndividualCustomer('Luiz', 'Otavio', '111.111');
        expect(sut.getName()).toBe('Luiz Otavio');
        expect(sut.getIDN()).toBe('111.111');
    });

});


describe('EnterpriseCustomer', () => {

    it('should have name and cnpj', () => {
        const sut = createEnterpriseCustomer('Udemy', '222');
        expect(sut).toHaveProperty('name', 'Udemy');
        expect(sut).toHaveProperty('cnpj', '222');
    });

    it('should have method to get anme and idn for enterprise constumers', () => {
        const sut = createEnterpriseCustomer('Udemy', '222');
        expect(sut.getName()).toBe('Udemy');
        expect(sut.getIDN()).toBe('222');
    });

});

