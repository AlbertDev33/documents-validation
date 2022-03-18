import { IsSequential } from '@src/pis/IsSequential';

interface ISutType {
  sut: IsSequential;
}

const stub = (): ISutType => {
  const sut = new IsSequential();

  return {
    sut,
  };
};

describe('Is Sequential', () => {
  it('should return false is sequential', () => {
    const { sut } = stub();
    const pis = '1111111111';

    const cleanedPis = sut.execute(pis);
    expect(cleanedPis).toBe(false);
  });

  it('should return true is not sequential', () => {
    const { sut } = stub();
    const pis = '55636637228';

    const cleanedPis = sut.execute(pis);
    expect(cleanedPis).toBe(true);
  });
});
