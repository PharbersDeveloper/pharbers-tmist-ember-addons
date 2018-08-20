import Component from '@ember/component';
import layout from '../templates/components/hospital-nav';
import styles from '../styles/hospital-nav';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'hosp-nav',
    classNames: ['container'],
    current: '',
    currentIndex: computed('data', 'current', function() {
        return this.get('data').indexOf(this.get('current')) + 1;
    }),
    total: computed('data', function() {
        return this.get('data').length;
    }),
    preHopsid: computed('data', function() {
        let data = this.get('data');
        let currentIndex = this.get('currentIndex')
        if (data.length === 1 || currentIndex === 1) {
            return null;
        } else {
            return data[this.get('currentIndex') - 2]
        }
    }),
    nextHospid: computed('data', function() {
        let data = this.get('data');
        let currentIndex = this.get('currentIndex')
        if (data.length === 1 || currentIndex === data.length) {
            return null;
        } else {
            return data[currentIndex]
        }
    }),

    actions: {
        backHospList() {
            this.sendAction('backHospList');
        },
        preHosp(id) {
            this.sendAction('preHosp', id);
        },
        nextHosp(id) {
            this.sendAction('nextHosp', id)
        }

    }
});