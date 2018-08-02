import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | target-hospital-card', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		let hospitalCardData = {
			"name": "中日医院",
			"hosp_level": "三级",
			"hospid": "5b43118fed925c05565b5bfc",
			"outpatient": 10000,
			"department": "神经内科",
			"representives": [{
				"name": "小宋",
				"avatar": "/assets/images/hosp_seller.png"
			}],
			"category": "综合",
			"surgery": 800,
			"beds": 18000
		}
		this.set('hospitalCardData', hospitalCardData)

		await render(hbs `{{target-hospital-card data=hospitalCardData}}`);

		assert.equal(this.element.textContent.trim(), '中日医院\n            \n        \n    \n     特色科室 神经内科 \n     病床数量 18,000 \n     门诊人次/年 10,000 \n     手术台数/年 800 \n    \n            小宋');

		// Template block usage:
		await render(hbs `{{#target-hospital-card data=hospitalCardData}}{{/target-hospital-card}}`);

		assert.equal(this.element.textContent.trim(), '中日医院\n            \n        \n    \n     特色科室 神经内科 \n     病床数量 18,000 \n     门诊人次/年 10,000 \n     手术台数/年 800 \n    \n            小宋');
	});
});
