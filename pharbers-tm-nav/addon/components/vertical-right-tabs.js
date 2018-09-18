import Component from '@ember/component';
import layout from '../templates/components/vertical-right-tabs';
import styles from '../styles/vertical-right-tabs';
import { computed } from '@ember/object';

export default Component.extend({
    budget: 0,
    layout,
    styles,
    tagName: '',
    init() {
        this._super(...arguments);
        this.sendAction('getRandB', this);
    },
    calcBudget: computed('budget', function() {
        let total = this.get('total');
        let totalBudget = {};
        totalBudget.used = this.get('budget');
        totalBudget.total = total;
        totalBudget.percent = (this.get('budget') * 100 / total).toFixed(2);
        return totalBudget;
    }),
});