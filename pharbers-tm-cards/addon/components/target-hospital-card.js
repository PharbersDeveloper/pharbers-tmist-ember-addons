import Component from '@ember/component';
import layout from '../templates/components/target-hospital-card';
import styles from '../styles/target-hospital-card';
import EmberObject, { computed, observer } from '@ember/object';
import nf from '../helpers/number-format';

const thcObject = EmberObject.extend({
	init() {
		this._super(...arguments);
		this.set('surgery_yearly', nf.compute(this.get('data.surgery_yearly')))
	},
});

export default Component.extend({
	init() {
		this._super(...arguments);
		this.set('businessInputs', thcObject.create({ 'data': this.data }))
		this.addObserver('businessInputs.surgery_yearly', this, 'watchData');
	},
	layout,
	styles,
	watchData: function() {
		// 对这个Component做业务处理，最后将数据冒泡返出去
		// 如下面这一样
		this.set('businessInputs.surgery_yearly', nf.compute(this.businessInputs.surgery_yearly))
		let text = this.businessInputs.surgery_yearly.toString()
			.replace(/,/g, '')

		console.info(text)
		this.sendAction('changeData', this.businessInputs)
	}
});