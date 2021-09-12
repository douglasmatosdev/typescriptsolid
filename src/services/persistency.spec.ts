import { Persistency } from "./persistency";

describe('Persistency', () => {
    // Avoid 
    afterEach(() => jest.clearAllMocks());

    it('should return undefined', () => {
        // sut: System Under Test
       const sut = new Persistency();
       expect(sut.saveOrder()).toBeUndefined();
    });

     // Test behavior.
    it('should call console.log once', () => {
        const sut = new Persistency();
        const consoleLogSpy = jest.spyOn(console, 'log'); // A type of mock
        sut.saveOrder();
       expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });

    it('should call console.log with "Pedido salvo com sucesso..."', () => {
        const sut = new Persistency();
        const consoleLogSpy = jest.spyOn(console, 'log'); // A type of mock
        sut.saveOrder();
       expect(consoleLogSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
    });
});