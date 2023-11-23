const stringValidation = (value) => typeof value === 'string';
const numberValidation = (value) => typeof value === 'number';
const booleanValidation = (value) => typeof value === 'boolean';

module.exports = { stringValidation, numberValidation, booleanValidation };
