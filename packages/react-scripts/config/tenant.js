'use strict';

const defaultName = 'default';
const tenantName = process.env.REACT_APP_TENANT || defaultName;
const isDefault = tenantName === defaultName;
const variablesFilename = isDefault
  ? 'variables.scss'
  : `variables.${tenantName}.scss`;

module.exports = {
  defaultName,
  tenantName,
  isDefault,
  variablesFilename,
};
