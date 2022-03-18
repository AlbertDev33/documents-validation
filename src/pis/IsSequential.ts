const SEQUENTIAL_PATTERN = /^(\d)\1{3,11}$/;
const IS_SEQUENTIAL = new RegExp(SEQUENTIAL_PATTERN);

export class IsSequential {
  public execute(pis: string): boolean {
    return !IS_SEQUENTIAL.test(pis);
  }
}
