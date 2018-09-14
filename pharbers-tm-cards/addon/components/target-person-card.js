import Component from '@ember/component';
import layout from '../templates/components/target-person-card';
import styles from '../styles/target-person-card';
import { computed, observer } from '@ember/object';

export default Component.extend({
	layout,
	styles,
	tagName: '',
	totalUsedDays: 0,
	// managerTotalDay: observer('data', function() {
	// 	let day = 0;
	// 	if (this.get('data') != undefined) {
	// 		this.get('data').map((rep) => {
	// 			day = rep.total_days;
	// 		})
	// 	}
	// 	this.set('totalDays', day);
	// }),
});