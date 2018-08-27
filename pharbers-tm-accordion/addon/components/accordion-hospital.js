import Component from '@ember/component';
import layout from '../templates/components/accordion-hospital';
import styles from '../styles/accordion-hospital';

export default Component.extend({
    layout,
    styles,
    integerIndex: 0,
    actions: {
        carousel() {
            console.log(this.get('integerIndex'))
            this.set('integerIndex', 1)
        }
    }
});