import Component from '@ember/component';
import layout from '../templates/components/vertical-right-tabs';
import styles from '../styles/vertical-right-tabs';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    tagName: '',
    init() {
        this._super(...arguments);
        this.sendAction('getRandB', this);
    },
    manpowerPerc: computed('data.budgets', 'data.budgets.@each.used', function() {
        let manpowerPromise = this.get('data.budgets');
        let newManpower = [];
        if (manpowerPromise != undefined) {
            manpowerPromise.map((item) => {
                let percentObject = {};
                percentObject.name = item.name;
                percentObject.id = item.id;
                percentObject.used = item.used_days;
                percentObject.total = item.total_days;
                percentObject.percent = ((item.used_days / item.total_days) * 100).toFixed(0);
                newManpower.push(percentObject);
            })
            return newManpower
        }
    }),
});