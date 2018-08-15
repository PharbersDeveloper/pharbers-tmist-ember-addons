import Component from '@ember/component';
import layout from '../templates/components/target-detail-medicines-card';
import styles from '../styles/target-detail-medicines-card';
import EmberObject, { observer } from '@ember/object';
import { once } from '@ember/runloop';

const medicObject = EmberObject.extend({
	hospitalMedicArrayObject: [
		{ lable: "指标设定", preset: 500, key: "target", unit: "元", sublable: "指标增长", value: "", subvalue: "" },
		{ lable: "预算分配", preset: 500, key: "budget", unit: "元", sublable: "预算所占", value: "", subvalue: "" },
		{ lable: "时间分配", preset: 500, key: "time", unit: "天", sublable: " ", value: "" },

	],
	init() {
		this._super(...arguments);
		let mid = this.mid;
		let data = this.data;
		let uuid = this.uuid;
		let hospid = this.hospid;
		// 获取缓存中是否存在
		try {
			let medicObj = JSON.parse(localStorage.getItem('hosp_medic'));
			throw "myException";
		} catch (e) {
			console.log("xxxxxxxxxxxxxxxxx")
			let init = data.map((ele) => {

				return {
					medicid: ele.id,
					attrs: [
						{ lable: "指标设定", preset: 500, key: "target", unit: "元", sublable: "指标增长", value: "", subvalue: "" },
						{ lable: "预算分配", preset: 500, key: "budget", unit: "元", sublable: "预算所占", value: "", subvalue: "" },
						{ lable: "时间分配", key: "time", unit: "天", sublable: " ", value: "" },
					],
				};
			})
			let object = {
				uuid: uuid,
				values: [{
					hospid: hospid,
					values: init
				}]
			}
			localStorage.setItem('hosp_medic', JSON.stringify(object));

		}
	},
});

export default Component.extend({
	init() {
		this._super(...arguments);
		this.set('hospid', "5b641342aa8de31ed8fb11e3");
		this.set('uuid', '1001010000001101010');
		this.set('hosp_medic_input', medicObject.create({ uuid: this.uuid, hospid: this.hospid, data: this.data }))
		// this.total = [];
		// this.mapData(this.data);
		// this.observerArea();
	},

	layout,
	styles,
	tagName: 'div',
	localClassNames: 'medicine-info',
	classNames: ['container'],
	watchData: observer('hosp_medic_input.hospitalMedicArrayObject.@each.value', function() {
		once(this, 'watchTarget')
	}),
	watchTarget: function() {
		let hmid = JSON.parse(localStorage.getItem('hosp_medic'));
		console.log(hmid)
		// let hopid = this.hospid;
		let hospid = "5b641342aa8de31ed8fb11e3";
		let medicid = "5b435533ed925c05565b5c2c";
		if (hmid.uuid === this.uuid) {
			for (let i = 0, len = hmid.values.length; i < len; i++) {
				let hospValues = hmid.values.filter((ele) => {
					ele.hospid !== hospid
				});
				if (hmid.values[i].hospid === this.hospid) {
					let medicValues = hmid.values[i].values.filter((ele) => {
						return ele.medicid !== medicid
					})
					let _inputData = this.hosp_medic_input.hospitalMedicArrayObject;
					_inputData.map((ele) => {
						if (ele.subvalue !== undefined && ele.value !== "") {
							Ember.set(ele, 'subvalue', (Number(ele.value) / ele.preset).toFixed(2));
						}
					});
					medicValues.pushObject({
						medicid: medicid,
						attrs: _inputData
						// attrs: this.hosp_medic_input.hospitalMedicArrayObject
					})

					hospValues.pushObject({
						hospid: this.hospid,
						values: medicValues
					})
					let object = {
						uuid: this.uuid,
						values: hospValues
					}
					localStorage.setItem('hosp_medic', JSON.stringify(object))
				}
			}
		}
	},
});