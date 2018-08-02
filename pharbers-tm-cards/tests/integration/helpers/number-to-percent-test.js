import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | number-to-percent', function(hooks) {
	setupRenderingTest(hooks);

	// Replace this with your real tests.
	test('it renders', async function(assert) {
		this.set('inputValue', '0.12');

		await render(hbs `{{number-to-percent inputValue}}`);

		assert.equal(this.element.textContent.trim(), '12');
	});
});
