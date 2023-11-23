const stringValidation = (value) => value === undefined || value === null || typeof value === 'string';
const numberValidation = (value) => value === undefined || value === null || typeof value === 'number';
const booleanValidation = (value) => value === undefined || value === null || typeof value === 'boolean';

module.exports = { stringValidation, numberValidation, booleanValidation };
