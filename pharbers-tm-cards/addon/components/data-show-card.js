import Component from '@ember/component';
import layout from '../templates/components/data-show-card';
import styles from '../styles/data-show-card';

export default Component.extend({
	layout,
	styles,
	tagName: 'div',
	localClassNames: 'block',
	init() {
		this._super(...arguments);
		this.sendAction('getShowCard', this);
	},
});