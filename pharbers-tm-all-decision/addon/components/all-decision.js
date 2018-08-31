import Component from '@ember/component';
import layout from '../templates/components/all-decision';
import styles from '../styles/all-decision';

export default Component.extend({
    layout,
    styles,
    whichpag: 'hospital',
    init() {
        this._super(...arguments);
        this.sendAction('queryDecision', this)
    },
}).reopenClass({
    positionalParams: ['data']
})