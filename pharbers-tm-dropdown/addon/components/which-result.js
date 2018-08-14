import Component from '@ember/component';
import layout from '../templates/components/which-result';
import styles from '../styles/which-result';
export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'select',
    // init() {
    //     this._super(...arguments);
    //     this.data = {
    //         "current": "整体销售表现",
    //         "selected": [{ "url": "", "text": "aaaaaaa" }, { "url": "", "text": "bbbbbbbbb" }, { "url": "", "text": "ddddddddddd" }, { "url": "", "text": "dedefderd" }]
    //     }
    // },
    actions: {
        onclick(type, id) {
            this.sendAction('onclick', type, id)
        }
    }
});