import { Moduololo } from '../src/mo-du-ololo';

describe('Moduololo', () => {
  test('should compute the correct modulo for 1101 and 3', () => {
    const calculator = new Moduololo();
    expect(calculator.moduloN('1101', 3)).toBe(1);
  });

  test('should compute the correct modulo for 1110 and 3', () => {
    const calculator = new Moduololo();
    expect(calculator.moduloN('1110', 3)).toBe(2);
  });

  test('should compute the correct modulo for 1111 and 3', () => {
    const calculator = new Moduololo();
    expect(calculator.moduloN('1111', 3)).toBe(0);
  });
});