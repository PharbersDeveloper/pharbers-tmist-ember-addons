import Component from '@ember/component';
import layout from '../templates/components/vertical-tabs';
import styles from '../styles/vertical-tabs';

export default Component.extend({
    layout,
    styles,
    // tagName: 'div',
    localClassNames: 'tab-container',
});