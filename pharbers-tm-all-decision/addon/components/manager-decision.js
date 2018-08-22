import Component from '@ember/component';
import layout from '../templates/components/manager-decision';
import styles from '../styles/manager-decision';

export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'manager-decision',
}).reopenClass({
    positionalParams: ['data']
})