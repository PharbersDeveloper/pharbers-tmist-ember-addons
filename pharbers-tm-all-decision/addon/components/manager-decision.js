import Component from '@ember/component';
import layout from '../templates/components/manager-decision';
import styles from '../styles/manager-decision';

export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'manager-decision',
    actions: {
        getMandNs(component) {
            this.sendAction('getMandNs', component);
        },
        getHospCardInfo(component) {
            this.sendAction('getHospCardInfo', component);
        },
        getInputCard(component) {
            this.sendAction('getInputCard', component);
        },
        getManagerTime(component) {
            this.sendAction('getManagerTime', component);
        },
        managerInput(mid) {
            this.sendAction('managerInput', mid);
        },
        repInput(rid) {
            this.sendAction('repInput', rid)
        }
    }
}).reopenClass({
    positionalParams: ['data']
})