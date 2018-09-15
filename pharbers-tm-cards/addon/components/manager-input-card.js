import Component from '@ember/component';
import layout from '../templates/components/manager-input-card';
import styles from '../styles/manager-input-card';
import { computed, observer } from '@ember/object';
import { once } from '@ember/runloop';

export default Component.extend({
	// mdata: null,
	layout,
	styles,
	tagName: '',

	init() {
		this._super(...arguments);
		// let cache = localStorage.getItem('managerinput');
		// if(cache) {
		// 	this.get('getStore').pushPayload(JSON.parse(cache));
		// 	this.allotTeamMeet();
		// }
	},

	allotTeamMeet() {
		this.get('getStore').peekAll('repinputinfo').forEach(elem => {
			elem.set('team_meet', this.get('mdata.team_meet'));
		});
	},

	getStore: computed('mdata', function () {
        return this.get('mdata').store;
    }),
	
	watching: observer('mdata.kpi_analysis', 'mdata.admin_work', 'mdata.team_meet', 'mdata.field_work', 'mdata.sales_train', function () {
        once(this, 'execute');
	}),

	execute() {
		let model = this.get('getStore').peekAll('managerinputinfo').firstObject;

		let recordJsonApi = this.get('getStore').object2JsonApi('managerinputinfo', model, false);

		localStorage.setItem('managerinput', JSON.stringify(recordJsonApi));

		this.allotTeamMeet();
	}
});