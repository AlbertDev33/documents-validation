# Validador de documentos brasileiros

Módulo para validação de **CNPJ**, **CPF** e **PIS** (outras validações futuramente).


# Exemplos

- **As funções já tratam os caracteres diferentes de números.**

- **Validação de CNPJ**

```ts
    import { isValidCNPJ } from 'documents-validation';

    const cnpj = '93.487.056/0001-01';
    const isValid = isValidCNPJ(cnpj);
    return isValid; // true
```

```ts
    import { isValidCNPJ } from 'documents-validation';

    const cnpj = '11.111.111/0001-11';
    const isValid = isValidCNPJ(cnpj);
    return isValid; // false
```

- **Validação de CPF**

```ts
    import { isValidCpf } from 'documents-validation';

    const cpf = '029.739.370-78';
    const isValid = isValidCpf(cpf);
    return isValid; // true
```

```ts
    import { isValidCpf } from 'documents-validation';

    const cpf = '111.111.111-11';
    const isValid = isValidCpf(cpf);
    return isValid; // false
```

- **Validação de PIS**

```ts
    import { isValidPis } from 'documents-validation';

    const pis = '065.92639.71-0';
    const isValid = isValidPis(pis);
    return isValid; // true
```

```ts
    import { isValidPis } from 'documents-validation';

    const pis = '111.11111.11-1';
    const isValid = isValidPis(pis);
    return isValid; // false
```
