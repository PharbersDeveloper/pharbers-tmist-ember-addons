import Mixin from '@ember/object/mixin';

export default Mixin.create({
	// hospitalMedicArrayObject: [
	//     {lable: "指标设定", key: "indicators_setting", value: ""},
	//     {lable: "预算分配", key: "budget_setting", value: ""},
	//     {lable: "时间分配", key: "time_setting", value: ""}
	// ],
	initHospitalMedicinesArrary(uuid, hospitalId) {
		let init = function() {
			let object = {
				uuid: uuid,
				values: []
			}
			localStorage.setItem('hospital_medicines', JSON.stringify(object));
		}
		let medicines = localStorage.getItem('hospital_medicines');
		if (medicines == null || medicines == undefined) {
			init()
		} else {
			if (JSON.parse(medicines).uuid != uuid) {
				init()
			} else {
				let info = JSON.parse(medicines).values.find(function(elem) {
					return elem.hospital_id == hospitalId && elem.medicines != undefined
				});

				if (info) {
					this.set('hospitalMedicArrayObject', info.medicines)
				}
			}
		}
	}
});