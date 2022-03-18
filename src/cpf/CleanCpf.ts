export class CleanCpf {
  public execute(cpf: string | number): string {
    const parseString = String(cpf);
    return parseString.replace(/[^0-9]/g, '');
  }
}
