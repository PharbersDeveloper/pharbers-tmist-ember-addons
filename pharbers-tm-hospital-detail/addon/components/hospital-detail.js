import Component from '@ember/component';
import layout from '../templates/components/hospital-detail';
import styles from '../styles/hospital-detail';

export default Component.extend({
        layout,
        styles,
        classNames: ['container'],
        localClassNames: 'hosp-detail',
        actions: {
            chooseRep(name) {
                this.sendAction('chooseRep', name);
            }
        }
    })
    .reopenClass({
        positionalParams: ['data']
    });