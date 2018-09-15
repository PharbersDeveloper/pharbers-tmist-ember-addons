import Component from '@ember/component';
import layout from '../templates/components/hospital-decision';
import styles from '../styles/hospital-decision';

export default Component.extend({
        layout,
        styles,
        tagName: 'div',
        localClassNames: 'hospital-decision',

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
            totalBugdetRatio(component) {
                this.sendAction('totalBugdetRatio', component)
            },
            hospInput(id) {
                this.sendAction('hospInput', id);
            },
            changeHospInput(hospid) {
                this.sendAction('changeHospInput', hospid);
            },
            chooseRep(repid) {
                this.sendAction('chooseRep', repid);
            }
        },
    })
    .reopenClass({
        positionalParams: ['data']
    });