import Component from '@ember/component';
import layout from '../templates/components/all-decision';
import styles from '../styles/all-decision';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    tagName: "",
    whichpag: 'hospital',
    init() {
        this._super(...arguments);
        this.sendAction('queryDecision', this);
    },
    actions: {
        getMedicNotices(component) {
            this.sendAction('getMedicNotices', component);
        },
        getHospInfo(component) {
            this.sendAction('getHospInfo', component);
        },
        getRepBudget(component) {
            this.sendAction('getRepBudget', component);
        },
        getHospCardInfo(component) {
            this.sendAction('getHospCardInfo', component);
        },
        getInputCard(component) {
            this.sendAction('getInputCard', component);
        }
    }
}).reopenClass({
    positionalParams: ['data']
})