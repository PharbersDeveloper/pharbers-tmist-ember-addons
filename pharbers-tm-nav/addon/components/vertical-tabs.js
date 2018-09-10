import Component from '@ember/component';
import layout from '../templates/components/vertical-tabs';
import styles from '../styles/vertical-tabs';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'tab-container',
    init() {
        this._super(...arguments);
        this.sendAction('getMandN', this);
    },
});