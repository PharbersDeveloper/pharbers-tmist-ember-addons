import Component from '@ember/component';
import layout from '../templates/components/nav-tool';
import styles from '../styles/nav-tool';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'menu-bar',
    budgetPerc: computed('data.budget', function() {
        let budget = this.get('data.budget');
        let percent = (budget.used) / (budget.total) * 100;
        return percent;
    }),
    manpowerPerc: computed('data.manpower', function() {
        let manpower = this.get('data.manpower');
        let newManpower = [];
        for (let i = 0, len = manpower.length; i < len; i++) {
            let percentObject = {};
            percentObject.name = manpower[i].name;
            percentObject.used = manpower[i].used;
            percentObject.total = manpower[i].total;
            percentObject.percent = ((manpower[i].used / manpower[i].total) * 100).toFixed(0);
            newManpower.push(percentObject);
        }
        return newManpower;
    }),
    init() {
        this._super(...arguments);
        this.navs = [
            { "id": 'notice', "text": "通知" },
            { "id": 'infobase', "text": "信息库" },
            { "id": "decision", "text": "团队培养" }
        ];
    },
    actions: {
        submit(text) {
            this.sendAction('submit', text)
        },
        onclick(id) {
            this.sendAction('onclick', id);
        }
    }
});