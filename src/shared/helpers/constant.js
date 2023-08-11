// ! Some common regex pattern
export const REGEX_DIGITS = /^[0-9]+$/;
export const REGEX_STRING_SPACE = /^[a-zA-Z'.]+( [a-zA-Z'.]+)*$/;
export const REGEX_ALPHABETS_HYPHEN_SPACE =
  /^(?![ '.-])(?!.*\s$)(?!.*[ .-]$)(?!.*[-.']{2})[A-Za-z.' -]+(?:[ -]?[A-Za-z]+)*(?:\.?(?!.*[ .-])[A-Za-z]+)*(?<!['-])$/;
export const REGEX_LOCATION_ALPHABETS_HYPHEN_SPACE =
  /^(?![ '.-/])(?!.*[-.'/]{2})([A-Za-z0-9(),.'/-]+\s?)*(?<![ /'-])$/;
export const REGEX_ALPHABETS = /^([A-Za-z])*$/;
export const REGEX_ALPHA_NUMERIC = /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$/;
export const REGEX_ALPHA_NUMERIC_VALID = /^[a-zA-Z0-9'.]+( [a-zA-Z0-9'.]+)*$/;

export const DEFAULT_EMPTY_FIELD_VALUE = '---';

export const CIPHER_KEY = 'aes-256-CBC';
