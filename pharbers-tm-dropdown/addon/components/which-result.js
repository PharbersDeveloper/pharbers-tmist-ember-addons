import Component from '@ember/component';
import layout from '../templates/components/which-result';
import styles from '../styles/which-result';
export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'select',
    init() {
        this._super(...arguments);
        this.sendAction('getDropdawnData', this);
    },
    actions: {
        onclick(type, id) {
            this.sendAction('onclick', type, id)
        }
    }
});