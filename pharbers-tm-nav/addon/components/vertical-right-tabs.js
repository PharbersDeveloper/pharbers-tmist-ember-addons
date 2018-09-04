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
        let manpower = this.get('data.budgets');
        let newManpower = [];
        if (this.get('data.budgets') != undefined) {
            for (let i = 0, len = this.get('data.budgets').length; i < len; i++) {
                let percentObject = {};
                percentObject.name = manpower[i].name;
                percentObject.id = manpower[i].id;
                percentObject.used = manpower[i].used;
                percentObject.total = manpower[i].total;
                percentObject.percent = ((manpower[i].used / manpower[i].total) * 100).toFixed(0);
                newManpower.push(percentObject);
            }
        }
        return newManpower;
    }),
});