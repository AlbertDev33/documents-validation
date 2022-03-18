export class CpfLengthValidation {
  private length = 11;

  public execute(cpf: string): boolean {
    return cpf.length === this.length;
  }
}
