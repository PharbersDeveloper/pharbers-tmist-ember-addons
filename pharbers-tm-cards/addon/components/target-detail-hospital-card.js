import Component from '@ember/component';
import layout from '../templates/components/target-detail-hospital-card';
import styles from '../styles/target-detail-hospital-card';
import { computed } from "@ember/object";
export default Component.extend({
	layout,
	styles,
	tagName: 'div',
	existRep: {},
	localClassNames: 'basic-info',
	classNames: ['row'],
	rightTotalRep: computed('data.represents', function() {
		this.set('existRep', {});
		let hMInputs = localStorage.getItem('hospital_medicines');
		let objectHMInputs = JSON.parse(localStorage.getItem('hospital_medicines'));
		if (this.data.represents.length !== 0) {
			let rep = this.data.represents[0];
			this.set('existRep', rep);
		}

		if (hMInputs != null || hMInputs != undefined) {
			if (objectHMInputs.uuid === this.uuid) {
				objectHMInputs.values.map((ele) => {
					if (ele.hospital_id === this.hospital_id) {
						if (ele.represent == "") {
							if (this.data.represents.length !== 0) {
								Ember.set(ele, 'represent', this.data.represents[0].id);
							}
						} else {
							this.set('existRep.id', ele.represent);
						}
						// Ember.set(ele, 'represent', id)
					}
				})
			};
			localStorage.setItem('hospital_medicines', JSON.stringify(objectHMInputs));
		}

		return this.totalRepresents;
	}),

	actions: {
		chooseRep(id) {
			console.log(id)
			let hMInputs = localStorage.getItem('hospital_medicines');
			let objectHMInputs = JSON.parse(localStorage.getItem('hospital_medicines'));
			if (hMInputs != null || hMInputs != undefined) {
				if (objectHMInputs.uuid === this.uuid) {
					objectHMInputs.values.map((ele) => {
						if (ele.hospital_id === this.hospital_id) {
							Ember.set(ele, 'represent', id)
							// Ember.set(ele, 'represent', id)
						}
					})
				};

				localStorage.setItem('hospital_medicines', JSON.stringify(objectHMInputs));
			}
			// console.log(hMInputs)
		}
	}
});