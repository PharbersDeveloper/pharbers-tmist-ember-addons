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
    // 每位代表的人力进度
    // manpowerPerc: computed('data', 'data.@each.used', function() {
    //     let manpowerPromise = this.get('data');
    //     let newManpower = [];
    //     if (manpowerPromise != undefined) {
    //         manpowerPromise.map((item) => {
    //             let percentObject = {};
    //             percentObject.name = item.repInfo.rep_name;
    //             percentObject.id = item.id;
    //             percentObject.used = item.used_days;
    //             percentObject.total = item.total_days;
    //             percentObject.percent = ((item.used_days / item.total_days) * 100).toFixed(0);
    //             newManpower.push(percentObject);
    //         })
    //         return newManpower
    //     }
    // }),
    calcBudget: computed('budget', function() {
        // console.log(this.get('budget'));
        let totalBudget = {};
        totalBudget.used = this.get('budget');
        totalBudget.total = 800000;
        totalBudget.percent = (this.get('budget') / 800000).toFixed(2);
        return totalBudget;
    }),
});