const CLEAN_INVALID_CHARACTER = /[^0-9]/;
const FLAG = 'g';
export const REPLACE_INVALID_CHARACTER = new RegExp(
  CLEAN_INVALID_CHARACTER,
  FLAG,
);

const SEQUENTIAL_PATTERN = /^(\d)\1{3,14}$/;
export const IS_SEQUENTIAL = new RegExp(SEQUENTIAL_PATTERN);
