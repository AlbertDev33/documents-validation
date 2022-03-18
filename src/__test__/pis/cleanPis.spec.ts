import { CleanPis } from '@src/pis/CleanPis';

interface ISutType {
  sut: CleanPis;
}

const stub = (): ISutType => {
  const sut = new CleanPis();

  return {
    sut,
  };
};

describe('Pis Clean Invalid Caracter', () => {
  it('should return cleaned pis number', () => {
    const { sut } = stub();
    const pis = '556.36637.22-8';
    const resultPis = '55636637228';

    const cleanedPis = sut.execute(pis);
    expect(cleanedPis).toEqual(resultPis);
  });
});
