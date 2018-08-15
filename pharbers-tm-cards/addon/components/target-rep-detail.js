import Component from '@ember/component';
import EmberObject, { observer, computed }from '@ember/object';
import { once } from '@ember/runloop';
import layout from '../templates/components/target-rep-detail';
import styles from '../styles/target-rep-detail';
import ManagerDecisionMixin from '../mixin/manager-decision';

const managerRepTime = EmberObject.extend(ManagerDecisionMixin, {
	init() {
		this._super(...arguments);
		this.set('managerRepArraryObject', [
			{lable: "协助拜访", key: "assist", value: ""},
			{lable: "脱岗产品培训", key: "product_training", value: ""},
			{lable: "1V1能力辅导", key: "coach", value: ""}
		])
		this.initManagerRepArrary(this.data, this.uuid, this.rid)
	},

});

export default Component.extend({
	managerRepTimeInputs: {},
	init() {
		this._super(...arguments);
		let obj = managerRepTime.create({uuid: this.uuid, rid: this.rid, data: this.data});

		let key = 'managerRepTimeInputs.' + this.rid
		this.set(key, obj);

		let managerObj = JSON.parse(localStorage.getItem('manager_time'));
		let team_building = managerObj.values.find(function(elem){
			return elem.key === "team_building";
		});
		this.set('teamBuilding', team_building.value || 0)

		let okeys = 'managerRepTimeInputs.' + this.rid + '.managerRepArraryObject.@each.value';
		this.addObserver(okeys, function(){ once(this, 'execute') })
	},
	layout,
	styles,
	execute() {
		let repObj = JSON.parse(localStorage.getItem('manager_rep_time'));
		let rid = this.rid;
		if(repObj.uuid === this.uuid) {
			let values = repObj.values.filter(function(elem){
				return elem.repId !== rid
			})
			values.pushObject({
				repId: this.rid,
				attrs: this.get('managerRepTimeInputs.'+this.rid).managerRepArraryObject
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
