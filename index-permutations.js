const Combinatorics = require('js-combinatorics');

module.exports = (query) => {
  const keys = Object.keys(query);
  const indexKeys = keys.map((key) => ({ [key]: 1 }));
  const combinations = Combinatorics.permutationCombination(indexKeys);
  return combinations.map((combination) => Object.assign({}, ...combination));
};
