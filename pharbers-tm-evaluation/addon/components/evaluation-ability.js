import Component from '@ember/component';
import layout from '../templates/components/evaluation-ability';
import styles from '../styles/evaluation-ability';

export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'card-container',
    init() {
        this._super(...arguments);
        this.sendAction('getRadarData', this);
        this.sendAction('getCardData', this);
        this.sendAction('getLineData', this);
    },
}).reopenClass({
    positionalParams: ['data']
});