import { CleanCnpj } from '@src/cnpj/cleanCNPJ';

type ISutType = {
  sut: CleanCnpj;
};

const stub = (): ISutType => {
  const sut = new CleanCnpj();

  return {
    sut,
  };
};

describe('Clean CNPJ', () => {
  it('should return a cleaned string', () => {
    const { sut } = stub();

    const cnpj = '84.123.302/0001-47';
    const cleaned = '84123302000147';
    const cleanedCnpj = sut.execute(cnpj);

    expect(cleanedCnpj).toEqual(cleaned);
  });
});
