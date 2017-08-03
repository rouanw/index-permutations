const test = require('tape');
const _ = require('lodash');
const indexPermutations = require('./index-permutations');

test('index permutations', function (t) {
  t.plan(3);

  t.deepEqual(indexPermutations({ 'name.first': 'Richard' }), [
    { 'name.first': 1 },
  ]);

  t.deepEqual(indexPermutations({ 'name.first': 'Richard', 'vegan': true }), [
    { 'name.first': 1 },
    { vegan: 1 },
    { 'name.first': 1, vegan: 1 },
    { vegan: 1, 'name.first': 1 },
  ]);

  const expected = [
    { 'name.first': 1 },
    { vegan: 1 },
    { happy: 1 },
    { 'name.first': 1, happy: 1 },
    { vegan: 1, 'name.first': 1 },
    { happy: 1, 'name.first': 1 },
    { happy: 1, vegan: 1 },
    { happy: 1, vegan: 1 },
    { vegan: 1, happy: 1 },
    { happy: 1, vegan: 1, 'name.first': 1},
    { happy: 1, 'name.first': 1, vegan: 1},
    { 'name.first': 1, vegan: 1, happy: 1 },
    { 'name.first': 1, happy: 1, vegan: 1 },
    { vegan: 1, 'name.first': 1, happy: 1},
    { vegan: 1, happy: 1, 'name.first': 1},
  ];
  const actual = indexPermutations({ 'name.first': 'Richard', 'vegan': true, happy: false });
  t.ok(_(actual).differenceWith(expected, _.isEqual).isEmpty());

  t.end();
});
