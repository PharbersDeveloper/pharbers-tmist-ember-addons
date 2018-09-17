import Component from '@ember/component';
import layout from '../templates/components/all-decision';
import styles from '../styles/all-decision';

export default Component.extend({
    layout,
    styles,
    tagName: "",
    whichpag: 'hospital',
    init() {
        this._super(...arguments);
    },
    actions: {
        getMandNs(component) {
            this.sendAction('getMandNs', component);
        },
        getMedicNotices(component) {
            this.sendAction('getMedicNotices', component);
        },
        getHospInfo(component) {
            this.sendAction('getHospInfo', component);
        },
        getRepBudget(component) {
            this.sendAction('getRepBudget', component);
        },
        totalBugdetRatio(component) {
            this.sendAction('totalBugdetRatio', component);
        },
        getHospCardInfo(component) {
            this.sendAction('getHospCardInfo', component);
        },
        getInputCard(component) {
            this.sendAction('getInputCard', component);
        },

        managerInput(mid) {
            this.sendAction('managerInput', mid);
        },

        runCalc() {
            this.sendAction('runCalc');
        }
    }
}).reopenClass({
    positionalParams: ['data']
})