import Component from '@ember/component';
import layout from '../templates/components/leader-decision';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import styles from '../styles/leader-decision';

export default Component.extend({
	isShowList: true,
	layout,
	styles,
	repId: '',
	actions: {
		details(rid) {
			this.set('select_repid', rid);
			this.set('isShowList', false);
		},
		backList() {
			this.set('isShowList', true);
		},
		close() {
			this.sendAction('close')
		},
		managerTime(data) {
			let reval = data.find(function(elem){
				return elem.key === "team_building";
			});
			this.set('team_building', reval.value)
		},
		managerTimeRep() {
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
		}
	}

}).reopenClass({
	positionalParams: ['data', 'uuid']
});