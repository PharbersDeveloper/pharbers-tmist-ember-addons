import Component from '@ember/component';
import layout from '../templates/components/target-hospital-info-card';
import styles from '../styles/target-hospital-info-card';

export default Component.extend({
	layout,
	styles,
	init() {
		this._super(...arguments);
		this.sendAction('getHospCardInfo', this);
	},
});