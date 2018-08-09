import Component from '@ember/component';
import layout from '../templates/components/hospital-nav';
import styles from '../styles/hospital-nav';
export default Component.extend({
    layout,
    styles,
    localClassNames: 'hosp-nav',
    classNames: ['container'],
    actions: {
        backHospList() {
            this.sendAction('backHospList');
        }
    }
});