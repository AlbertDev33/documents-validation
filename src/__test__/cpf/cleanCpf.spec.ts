import { CleanCpf } from '../../cpf/CleanCpf';

interface ISutType {
  sut: CleanCpf;
}

const stub = (): ISutType => {
  const sut = new CleanCpf();

  return {
    sut,
  };
};

describe('Clean CPF', () => {
  it('should be able to clean cpf', () => {
    const { sut } = stub();

    const cpf = '955.226.460-04';
    const expectedCpf = '95522646004';

    const cleanedCpf = sut.execute(cpf);
    expect(cleanedCpf).toEqual(expectedCpf);
  });
});
