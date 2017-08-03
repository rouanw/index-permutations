const test = require('tape');
const _ = require('lodash');
const indexMixer = require('./index-mixer');

test('index mixer', function (t) {
  t.plan(4);

  t.deepEqual(indexMixer({ 'name.first': 'Richard' }), [
    { 'name.first': 1 },
  ]);

  t.deepEqual(indexMixer({ 'name.first': 'Richard', 'vegan': true }), [
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
  const actual = indexMixer({ 'name.first': 'Richard', 'vegan': true, happy: false });
  t.ok(_(actual).differenceWith(expected, _.isEqual).isEmpty());
  t.equal(actual.length, expected.length);

  t.end();
});
