import Component from '@ember/component';
import layout from '../templates/components/manager-input-card';
import styles from '../styles/manager-input-card';

export default Component.extend({
	layout,
	styles,
	tagName: '',
	init() {
		this._super(...arguments);
		this.sendAction('getManagerTime', this);
	},
});