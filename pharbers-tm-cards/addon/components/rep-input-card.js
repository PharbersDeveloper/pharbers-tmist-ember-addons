import Component from '@ember/component';
import layout from '../templates/components/rep-input-card';
import styles from '../styles/rep-input-card';
import { computed } from '@ember/object';

export default Component.extend({
	layout,
	styles,
	init() {
		this._super(...arguments);
		this.sendAction('getInputCard', this);
	},
	getStore: computed('repItem', function() {
        return this.get('repItem').store
    }),
	actions: {
		repInput(rid) {
            let repRecord = this.get('getStore').peekRecord('repinputinfo', rid);
            let recordJsonApi = this.get('getStore').object2JsonApi('repinputinfo', repRecord, false);
			localStorage.setItem('repinfo_' + this.get('uuid') + "_" + rid, JSON.stringify(recordJsonApi));
		}
	}
});