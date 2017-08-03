module.exports = (query) => {
  const keys = Object.keys(query);
  return keys.map((key) => ({ [key]: 1 }));
};
