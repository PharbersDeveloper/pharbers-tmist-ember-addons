import Component from '@ember/component';
import EmberObject, { observer } from '@ember/object';
import { once } from '@ember/runloop';
import layout from '../templates/components/manager-times';
import styles from '../styles/manager-times';
import ManagerDecisionMixin from '../mixin/manager-decision';

const managerTime = EmberObject.extend(ManagerDecisionMixin, {
	init() {
		this._super(...arguments);
		this.initManagerArrary(this.uuid);
	},
});

export default Component.extend({
	init() {
		this._super(...arguments);
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