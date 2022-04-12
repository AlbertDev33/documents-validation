import { IsSequential } from '@src/cnpj/isSequential';

type ISutType = {
  sut: IsSequential;
};

const stub = (): ISutType => {
  const sut = new IsSequential();

  return {
    sut,
  };
};

describe('Clean CNPJ', () => {
  it('should return false is sequential number', () => {
    const { sut } = stub();

    const cnpj = '11111111111111';
    const isValid = sut.execute(cnpj);

    expect(isValid).toBe(false);
  });

  it('should return true is not sequential number', () => {
    const { sut } = stub();

    const cnpj = '84123302000147';
    const isValid = sut.execute(cnpj);

    expect(isValid).toBe(true);
  });
});
