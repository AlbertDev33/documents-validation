import { IsSequential } from '../../cpf/IsSequential';

interface ISutType {
  sut: IsSequential;
}

const stub = (): ISutType => {
  const sut = new IsSequential();

  return {
    sut,
  };
};

describe('Is Sequential Numbers', () => {
  it('should return false is sequential', () => {
    const { sut } = stub();

    const cpf = '11111111111';
    const isValid = sut.execute(cpf);
    expect(isValid).toBe(false);
  });

  it('should return true is not sequential', () => {
    const { sut } = stub();

    const cpf = '84576016016';
    const isValid = sut.execute(cpf);
    expect(isValid).toBe(true);
  });
});
