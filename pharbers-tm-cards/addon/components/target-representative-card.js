import Component from '@ember/component';
import layout from '../templates/components/target-representative-card';
import styles from '../styles/target-representative-card';

export default Component.extend({
	layout,
	styles,
	tagName: '',
	actions: {
		show(rid) {
			this.sendAction('showMore', rid)
		}
	}
});