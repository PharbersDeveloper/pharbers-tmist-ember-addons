import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | target-goods-card', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		let goodsData = {
			"medicines": [{
					"name": "口服抗生素",
					"contributionrate": 0.95,
					"share": 0.16,
					"id": "5b435533ed925c05565b5c2c",
					"previoussales": 18888,
					"potential": 54561334
				},
				{
					"name": "小儿抗生素",
					"contributionrate": 0.85,
					"share": 0.3,
					"id": "5b43557bed925c05565b5c2d",
					"previoussales": 32000,
					"potential": 54561334
				},
				{
					"name": "静脉注射抗生素",
					"contributionrate": 0.75,
					"share": 0.42,
					"id": "5b4355caed925c05565b5c2e",
					"previoussales": 440000,
					"potential": 54561334
				}
			]
		}

		this.set('goodsData', goodsData);

		await render(hbs `{{target-goods-card data=goodsData}}`);

		assert.equal(this.element.textContent.trim(), this.element.textContent.trim());

		// Template block usage:
		await render(hbs `{{#target-goods-card}}{{/target-goods-card}}`);

		assert.equal(this.element.textContent.trim(), this.element.textContent.trim());
	});
});
