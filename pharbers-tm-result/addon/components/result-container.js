import Component from '@ember/component';
import layout from '../templates/components/result-container';
import styles from '../styles/result-container';

export default Component.extend({
    layout,
    styles,
    actions: {
        changeReportPage(type, id) {
            this.sendAction('changeReportPage', type, id);
        },
        getDropdawnData(component) {
            this.sendAction('getDropdawnData', component);
        },
        getShowCard(component) {
            this.sendAction('getShowCard', component);
        },
        getResultTable(component) {
            this.sendAction('getResultTable', component);
        }
    }
}).reopenClass({
    positionalParams: ['data']
})