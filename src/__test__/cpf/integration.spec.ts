import { isValidCpf } from '../../cpf/index';

describe('CPF integration test', () => {
  it('should return true is valid string cpf', () => {
    const cpf = '52326088000';
    const isValid = isValidCpf(cpf);
    expect(isValid).toBe(true);
  });

  it('should return true is valid number cpf', () => {
    const cpf = 52326088000;
    const isValid = isValidCpf(cpf);
    expect(isValid).toBe(true);
  });

  it('should return false is invalid string cpf', () => {
    const cpf = '52326088002';
    const isValid = isValidCpf(cpf);
    expect(isValid).toBe(false);
  });

  it('should return false is invalid number cpf', () => {
    const cpf = 52326088002;
    const isValid = isValidCpf(cpf);
    expect(isValid).toBe(false);
  });

  it('should return true with string cpf mask', () => {
    const cpf = '545.865.050-60';
    const isValid = isValidCpf(cpf);
    expect(isValid).toBe(true);
  });
});
