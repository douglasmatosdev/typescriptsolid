import { Messaging } from "./messaging";

const createSut = () => {
    return new Messaging();
};

describe('Messaging', () => {
    // Avoid 
    afterEach(() => jest.clearAllMocks());

    it('should return undefined', () => {
        // sut: System Under Test
       const sut = createSut();
       expect(sut.sendMessage('teste')).toBeUndefined();
    });

    // Test behavior.
    it('should call console.log with "Mensagem enviada:" and msg', () => {
        const sut = createSut();
        const msg = 'teste'
        const consoleLogSpy = jest.spyOn(console, 'log'); // A type of mock
        sut.sendMessage(msg);
       expect(consoleLogSpy).toHaveBeenCalledWith('Mensagem enviada:', msg);
    });

    it('should call console.log once', () => {
        const sut = createSut();
        const consoleLogSpy = jest.spyOn(console, 'log'); // A type of mock
        sut.sendMessage('teste');
       expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });

});