export class CleanCnh {
  public execute(cnh: string | number): string {
    const parseString = String(cnh);
    return parseString.replace(/[^0-9]/g, '');
  }
}
