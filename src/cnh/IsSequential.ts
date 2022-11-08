export class IsSequential {
  public execute(cnh: string) {
    const isSequencialNumbers = /^(\d)\1{0,11}$/;
    return !isSequencialNumbers.test(cnh);
  }
}
