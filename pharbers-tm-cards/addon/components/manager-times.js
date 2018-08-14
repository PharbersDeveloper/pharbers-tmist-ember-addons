import Component from '@ember/component';
import EmberObject, { observer }from '@ember/object';
import { once } from '@ember/runloop';
import layout from '../templates/components/manager-times';
import styles from '../styles/manager-times';

const managerTime = EmberObject.extend({
	managerArraryObject: [
		{lable: "KPI分析", key: "kpi", value: ""},
		{lable: "团建/例会", key: "team_building", value: ""},
		{lable: "行政事务", key: "administrative", value: ""}
	],
	init() {
		this._super(...arguments);
		try {
			let obj = JSON.parse(localStorage.getItem('manager_time'));
			if(obj.uuid === this.uuid) {
				this.set('managerArraryObject', obj.values)
			}
		} catch (e) {
			let object = {
				uuid: this.uuid,
				values: this.managerArraryObject
			}
			localStorage.setItem('manager_time', JSON.stringify(object));
		}
	},

});

export default Component.extend({
	init() {
		this._super(...arguments);
		this.set('uuid', '1001010000001101010');
		this.set('manager_time_inputs', managerTime.create({uuid: this.uuid}));
		try {
			const reducer = (accumulator, currentValue) => accumulator + currentValue;
			let repObj = JSON.parse(localStorage.getItem('manager_rep_time'));
			let coach = repObj.values.map(function(elem){
				return parseInt(elem.attrs.find(function(ele){
					return ele.key === 'coach'
				}).value || 0)
			}).reduce(reducer);
			let assist = repObj.values.map(function(elem){
				return parseInt(elem.attrs.find(function(ele){
					return ele.key === 'assist'
				}).value || 0)
			}).reduce(reducer);
			this.set('coach', coach);
			this.set('assist', assist);
		} catch (e) {
			this.set('coach', 0);
			this.set('assist', 0);
		}


	},
	layout,
	styles,
	watchData: observer('manager_time_inputs.managerArraryObject.@each.value', function() {
		once(this, 'execute');
	}),
	execute() {
		let object = {
			uuid: this.uuid,
			values: this.manager_time_inputs.managerArraryObject
		}
		localStorage.setItem('manager_time', JSON.stringify(object));
		this.sendAction('managerTime', this.manager_time_inputs.managerArraryObject);
	},

});
