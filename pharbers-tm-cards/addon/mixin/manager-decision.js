import Mixin from '@ember/object/mixin';

export default Mixin.create({
	managerArraryObject: [
		{ lable: "KPI分析", key: "kpi", value: "" },
		{ lable: "团建/例会", key: "team_building", value: "" },
		{ lable: "行政事务", key: "administrative", value: "" }
	],
	initManagerArrary(uuid) {
		let managerTime = localStorage.getItem('manager_time');
		if (managerTime == null || managerTime == undefined) {
			let object = {
				uuid: uuid,
				values: this.managerArraryObject
			}
			localStorage.setItem('manager_time', JSON.stringify(object));
		} else {
			if (JSON.parse(managerTime).uuid === uuid) {
				this.set('managerArraryObject', JSON.parse(managerTime).values)
			}
		}
	},
	initManagerRepArrary(data, uuid, rid) {
		let managerRepTime = localStorage.getItem('manager_rep_time')
		if (managerRepTime == null || managerRepTime == undefined) {
			let managerRepArraryObject = [
				{ lable: "协助拜访", key: "assist", value: "" },
				{ lable: "脱岗产品培训", key: "product_training", value: "" },
				{ lable: "1V1能力辅导", key: "coach", value: "" }
			]
			let rep_array = data.map(function(elem) {
				return {
					repId: elem.id,
					repName: elem.lable.name,
					attrs: managerRepArraryObject
				}
			});
			let object = {
				uuid: uuid,
				values: rep_array
			}
			localStorage.setItem('manager_rep_time', JSON.stringify(object));
		} else {
			if (JSON.parse(managerRepTime).uuid === uuid) {
				let values = JSON.parse(managerRepTime).values.
				find(function(elem) {
					return elem.repId === rid
				})
				if (values) {
					this.set('managerRepArraryObject', values.attrs)
				}
			} else {
				let managerRepArraryObject = [
					{ lable: "协助拜访", key: "assist", value: "" },
					{ lable: "脱岗产品培训", key: "product_training", value: "" },
					{ lable: "1V1能力辅导", key: "coach", value: "" }
				]
				let rep_array = data.map(function(elem) {
					return {
						repId: elem.id,
						repName: elem.lable.name,
						attrs: managerRepArraryObject
					}
				});
				let object = {
					uuid: uuid,
					values: rep_array
				}
				localStorage.setItem('manager_rep_time', JSON.stringify(object));
			}
		}
	}
});