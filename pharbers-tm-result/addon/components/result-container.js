import Component from '@ember/component';
import layout from '../templates/components/result-container';
import styles from '../styles/result-container';

export default Component.extend({
    layout,
    styles
}).reopenClass({
    positionalParams: ['result']
})