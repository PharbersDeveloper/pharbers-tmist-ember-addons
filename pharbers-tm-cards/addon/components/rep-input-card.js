import Component from '@ember/component';
import layout from '../templates/components/rep-input-card';
import styles from '../styles/rep-input-card';

export default Component.extend({
	layout,
	styles,
	init() {
		this._super(...arguments);
		this.sendAction('getInputCard', this);
	},
});