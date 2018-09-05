import Component from '@ember/component';
import layout from '../templates/components/result-container';
import styles from '../styles/result-container';

export default Component.extend({
    layout,
    styles,
    actions: {
        onclick(type, id) {
            this.sendAction('onclick', type, id);
        },
        getDropdawnData(component) {
            this.sendAction('getDropdawnData', component);
        }
    }
}).reopenClass({
    positionalParams: ['result']
})