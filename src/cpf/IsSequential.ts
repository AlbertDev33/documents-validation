export class IsSequential {
  public execute(cpf: string) {
    const isSequencialNumbers = /^(\d)\1{3,11}$/;
    return !isSequencialNumbers.test(cpf);
  }
}
