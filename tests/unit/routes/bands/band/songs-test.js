import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bands/band/songs', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bands/band/songs');
    assert.ok(route);
  });
});
