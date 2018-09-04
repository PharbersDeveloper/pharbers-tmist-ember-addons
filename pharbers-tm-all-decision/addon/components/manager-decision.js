import Component from '@ember/component';
import layout from '../templates/components/manager-decision';
import styles from '../styles/manager-decision';

export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'manager-decision',
    actions: {
        getMedicNotices(component) {
            this.sendAction('getMedicNotices', component);
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