import Component from '@ember/component';
import layout from '../templates/components/hospital-decision';
import styles from '../styles/hospital-decision';

export default Component.extend({
        layout,
        styles,
        tagName: 'div',
        localClassNames: 'hospital-decision',

    })
    .reopenClass({
        positionalParams: ['data']
    });