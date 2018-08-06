import Component from '@ember/component';
import layout from '../templates/components/target-rep-detail';
import styles from '../styles/target-rep-detail';

export default Component.extend({
	layout,
	styles,
	tagName: '',
	actions: {
		hideDetail() {
			this.sendAction('hideDetail')
		}
	},

});