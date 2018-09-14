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
    // TODO 为毛是写死的
    calcBudget: computed('budget', function() {
        let totalBudget = {};
        totalBudget.used = this.get('budget');
        totalBudget.total = 800000;
        totalBudget.percent = (this.get('budget') / 800000).toFixed(2);
        return totalBudget;
    }),
});