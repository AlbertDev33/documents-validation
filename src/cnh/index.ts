import {
    cleanCnh,
    isSequential,
  } from './constants/constants';

  export const isValidCnh = (cnh: string | number): boolean => {
    const cleanedCnh = cleanCnh.execute(cnh);
    const isSequentialValidation = isSequential.execute(cleanedCnh);
    while (cleanedCnh.length < 11) cleanedCnh = "0" + cleanedCnh;

    let v = 0;
    let j = 9;

    for (let i = 0; i < 9; ++i, --j) {
        v += ((cleanedCnh.charCodeAt(i) - 48) * j);
    }

    let dsc = 0;
    let vl1 = v % 11;

    if (vl1 >= 10) {
        vl1 = 0;
        dsc = 2;
    }

    v = 0;
    j = 1;

    for (let i = 0; i < 9; ++i, ++j) {
        v += ((cleanedCnh.charCodeAt(i) - 48) * j);
    }

    const x = v % 11;
    let vl2 = (x >= 10) ? 0 : x - dsc;
    if (vl2 < 0) vl2 = 0;

    const isValid = (String(vl1) + String(vl2)) === cleanedCnh.substring(cleanedCnh.length - 2);
    
    return isValid;
  }