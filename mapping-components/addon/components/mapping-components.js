import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/mapping-components';

export default Component.extend({
		layout,
		tagName: "",
		result: computed('data', function() {
			// let reVal = this.get('data')
			// 	.map(function(ele) {
			// 		return { 'key': ele.key, 'values': ele.values }
			// 	});
			// return reVal;
			if (Array.isArray(this.get('data'))) {
				let reVal = this.get('data')
					.map(function(ele) {
						return { 'key': ele.component_name }
					});
				return reVal;
			} else {
				return { 'key': this.get('data').component_name }
			}
		}),
	})
	.reopenClass({
		positionalParams: ['data']
	});