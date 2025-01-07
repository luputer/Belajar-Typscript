import { sayHello } from '../src/index';

describe('sayHello', () => {
    it('should return a greeting message with the name', () => {
        expect(sayHello('saidi')).toBe('Hello, saidi!');
    });
});
