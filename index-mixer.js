const Combinatorics = require('js-combinatorics');

const getIndexKeys = (query) =>
  Object.keys(query).reduce((indexKeys, key) => (
    key === '$or'
      ? indexKeys.concat(...query['$or'].map(leg => getIndexKeys(leg)))
      : indexKeys.concat({ [key]: 1 })
  ), []);

module.exports = (query) => {
  const combinations = Combinatorics.permutationCombination(getIndexKeys(query));
  return combinations.map((combination) => Object.assign({}, ...combination));
};
