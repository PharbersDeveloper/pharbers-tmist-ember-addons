 import Component from '@ember/component';
 import layout from '../templates/components/target-detail-medicines-card';
 import styles from '../styles/target-detail-medicines-card';
 import EmberObject, { observer, computed } from '@ember/object';
 import { once } from '@ember/runloop';
 import HospitalDetailsMixin from '../mixin/hospital-details';

 const medicObject = EmberObject.extend(HospitalDetailsMixin, {
 	init() {
 		this._super(...arguments);
 		let budget = this.allBudget;
 		this.set('hospitalMedicArrayObject', this.data.map(function(elem) {
 			return {
 				medicid: elem.id,
 				attrs: [
 					{ lable: "指标设定", medicid: elem.id, key: "indicators_setting", value: "", preset: elem.pre_target, unit: "元", computed_field: "指标增长", computedVal: 0 },
 					{ lable: "预算分配", medicid: elem.id, key: "budget_setting", value: "", preset: budget, unit: "元", computed_field: "预算分配%", computedVal: 0 },
 					{ lable: "时间分配", medicid: elem.id, key: "time_setting", value: "", unit: "天", computed_field: "", computedVal: "" }
 				]
 			}
 		}));
 		this.initHospitalMedicinesArrary(this.uuid, this.hospital_id)
 	},
 });

 export default Component.extend({
 	flatten(arr) {
 		while (arr.some(item => Array.isArray(item))) {
 			arr = [].concat(...arr);
 		}
 		return arr;
 	},
 	init() {
 		this._super(...arguments);
 		this.set('hosp_medic_input', medicObject.create({ data: this.data, uuid: this.uuid, hospital_id: this.hospital_id, allBudget: this.allBudget }));
 	},
 	medicines: computed('hosp_medic_input.hospitalMedicArrayObject.@each', function() {
 		return this.flatten(this.get('hosp_medic_input.hospitalMedicArrayObject'));
 	}),
 	values: computed('medicines.@each.attrs', function() {
 		return this.flatten(this.get('medicines').mapBy('attrs'));
 	}),
 	watchData: observer('values.@each.value', function() {
 		once(this, 'execute');
 	}),
 	execute() {
 		let medicines = JSON.parse(localStorage.getItem('hospital_medicines'));
 		let hospital_id = this.hospital_id;
 		let rep = '';
 		if (this.uuid == medicines.uuid) {
 			let object = medicines.values.filter(function(elem) {
 				return elem.hospital_id != hospital_id
 			});
 			medicines.values.filter((hos) => {
 				if (hos.hospital_id == hospital_id) {
 					rep = hos.represent;
 				}
 			})
 			let localMedicines = this.get('medicines');
 			localMedicines.map((ele) => {
 				ele.attrs.map((item) => {
 					if (item.key == "indicators_setting") {
 						let val = (Number(item.value) / +item.preset);
 						Ember.set(item, 'computedVal', val)
 					} else if (item.key == "budget_setting") {
 						let val = ((Number(item.value) / +item.preset) * 100);
 						Ember.set(item, 'computedVal', val)
 					}
 					if (item.preset === 0 && item.value !== "") {
 						Ember.set(item, 'computedVal', "NaN")
 					}
 				})
 			});
 			object.pushObject({
 				hospital_id: this.hospital_id,
 				represent: rep,
 				medicines: localMedicines
 			});
 			medicines.values.clear();
 			medicines.values = object
 		}
 		localStorage.setItem('hospital_medicines', JSON.stringify(medicines));
 		this.sendAction('getRep')
 	},
 	layout,
 	styles,
 	tagName: 'div',
 	localClassNames: 'medicine-info',
 	classNames: ['row'],

 });