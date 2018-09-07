import Component from '@ember/component';
import layout from '../templates/components/table-number-percent';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    tagName: "span",
    result: computed('value', function() {
        let params = this.get('value');
        if (isNaN(params)) {
            return params;
        } else {
            return ((parseFloat(params) * 100).toFixed(0)).toString()
        }
    }),
});