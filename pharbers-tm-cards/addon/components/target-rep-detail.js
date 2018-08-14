import Component from '@ember/component';
import EmberObject, { observer }from '@ember/object';
import { once } from '@ember/runloop';
import layout from '../templates/components/target-rep-detail';
import styles from '../styles/target-rep-detail';

const managerRepTime = EmberObject.extend({
	managerRepArraryObject: [
		{lable: "协助拜访", key: "assist", value: ""},
		{lable: "脱岗产品培训", key: "product_training", value: ""},
		{lable: "1V1能力辅导", key: "coach", value: ""}
	],
	init() {
		this._super(...arguments);
		let rid = this.rid;
		let uuid = this.uuid;
		let data = this.data;
		try {
			let repObj = JSON.parse(localStorage.getItem('manager_rep_time'));
			if(repObj.uuid === uuid) {
				let values = repObj.values.find(function(elem){
					return elem.repId === rid
				})
				if(values) {
					this.set('managerRepArraryObject', values.attrs)
				}
			}
		} catch (e) {
			let init = data.map(function(elem) {
				return {
					repId: elem.id,
					attrs: [
						{lable: "协助拜访", key: "assist", value: ""},
						{lable: "脱岗产品培训", key: "product_training", value: ""},
						{lable: "1V1能力辅导", key: "coach", value: ""}
					]
				}
			});
			let object = {
				uuid: uuid,
				values: init
			}
			localStorage.setItem('manager_rep_time', JSON.stringify(object));
		}
	},

});

export default Component.extend({
	init() {
		this._super(...arguments);
		this.set('manager_rep_time_inputs', managerRepTime.create({uuid: this.uuid, rid: this.rid, data: this.data}));
		let managerObj = JSON.parse(localStorage.getItem('manager_time'));
		let team_building = managerObj.values.find(function(elem){
			return elem.key === "team_building";
		});
		this.set('teamBuilding', team_building.value || 0)
	},
	layout,
	styles,
	watchData: observer('manager_rep_time_inputs.managerRepArraryObject.@each.value', function() {
		once(this, 'execute');
	}),
	execute() {
		let repObj = JSON.parse(localStorage.getItem('manager_rep_time'));
		let rid = this.rid;
		if(repObj.uuid === this.uuid) {
			let values = repObj.values.filter(function(elem){
				return elem.repId !== rid
			})
			values.pushObject({
				repId: this.rid,
				attrs: this.manager_rep_time_inputs.managerRepArraryObject
			})
			let object = {
				uuid: this.uuid,
				values: values
			}
			localStorage.setItem('manager_rep_time', JSON.stringify(object));
			this.sendAction('managerTimeRep');
		}
	},
	actions: {
		backList() {
			this.sendAction('backList')
		}
	},
});
