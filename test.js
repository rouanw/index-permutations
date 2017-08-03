const test = require('tape');
const indexPermutations = require('./index-permutations');

test('index permutations', function (t) {
  t.plan(2);

  t.deepEqual(indexPermutations({ 'name.first': 'Richard' }), [
    { 'name.first': 1 },
  ]);

  t.deepEqual(indexPermutations({ 'name.first': 'Richard', 'vegan': true }), [
    { 'name.first': 1 },
    { vegan: 1 },
  ]);

  t.end();
});
