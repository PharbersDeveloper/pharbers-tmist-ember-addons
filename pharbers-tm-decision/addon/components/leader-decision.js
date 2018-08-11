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
		}
	}

}).reopenClass({
	positionalParams: ['data']
});
