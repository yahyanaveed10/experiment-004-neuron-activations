import test from 'node:test';
import assert from 'node:assert/strict';
import { runNetwork } from './network.mjs';

test('the four binary inputs produce the XOR pattern', () => {
  assert.equal(runNetwork(0, 0).output, 0);
  assert.equal(runNetwork(1, 0).output, 1);
  assert.equal(runNetwork(0, 1).output, 1);
  assert.equal(runNetwork(1, 1).output, 0);
});

test('hidden activations carry the difference, not a probability', () => {
  assert.deepEqual(runNetwork(0.8, 0.3).activations, [0.5, 0]);
  assert.equal(runNetwork(0.8, 0.3).output, 0.5);
});
