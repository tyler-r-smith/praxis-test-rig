import { test, describe } from 'node:test';
import assert from 'node:assert';
import { createApp } from './server.js';

describe('Express Server', () => {
  test('createApp returns an express app', () => {
    const app = createApp();
    assert.ok(app);
    assert.strictEqual(typeof app.listen, 'function');
  });
});
