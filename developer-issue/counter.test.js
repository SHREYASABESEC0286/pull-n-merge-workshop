const test = require('node:test');
const assert = require('node:assert/strict');
const { incrementCount } = require('./counter.js');

test('one click adds one attendee', () => {
  assert.equal(incrementCount(12), 13);
});

test('two clicks add two attendees in total', () => {
  assert.equal(incrementCount(incrementCount(12)), 14);
});
