import Component from '@ember/component';
import layout from '../templates/components/target-detail-hospital-card';
import styles from '../styles/target-detail-hospital-card';

export default Component.extend({
	layout,
	styles,
	tagName: 'div',
	localClassNames: 'basic-info',
	classNames: ['row'],
	// existRep: '选择代表',
	init() {
		this._super(...arguments);
		this.checkRepHasExist();
	},
	checkRepHasExist() {
		let hMInputs = localStorage.getItem('hospital_medicines');
		if (hMInputs != null || hMInputs != undefined) {
			if (JSON.parse(hMInputs).uuid === this.uuid) {
				JSON.parse(hMInputs).values.map((ele) => {
					if (ele.hospital_id === this.hospital_id) {
						// Ember.set(ele, 'represent', name)
						if (!ele.represent) {
							this.set('existRep', '选择代表')
						} else {
							this.set('existRep', ele.represent)
						}
					}
				})
			}
		}

	},
	actions: {
		chooseRep(name) {
			let hMInputs = localStorage.getItem('hospital_medicines');
			let objectHMInputs = JSON.parse(localStorage.getItem('hospital_medicines'));
			// console.log(this.hospital_id);
			// console.log(this.uuid);
			if (hMInputs != null || hMInputs != undefined) {
				if (objectHMInputs.uuid === this.uuid) {
					objectHMInputs.values.map((ele) => {
						if (ele.hospital_id === this.hospital_id) {
							Ember.set(ele, 'represent', name)
						}
					})
				};

				localStorage.setItem('hospital_medicines', JSON.stringify(objectHMInputs));
			}

			// console.log(hMInputs)
		}
	}
});