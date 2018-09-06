import Component from '@ember/component';
import layout from '../templates/components/table-number-thousands';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    tagName: "span",
    result: computed('value', function() {
        let p = this.get('value').toString().replace(/[,，、]/g, "");
        if (isNaN(p)) {
            return p;
        } else {
            let zznf = /([-+]?)(\d*)(\.\d+)?/g
            let groups = zznf.exec("" + p),
                mask = groups[1], //符号位
                integers = (groups[2] || "").split(""), //整数部分
                decimal = groups[3] || "", //小数部分
                remain = integers.length % 3;

            let temp = integers.reduce(function(previousValue, currentValue, index) {
                if (index + 1 === remain || (index + 1 - remain) % 3 === 0) {
                    return previousValue + currentValue + ",";
                } else {
                    return previousValue + currentValue;
                }
            }, "").replace(/,$/g, "");
            return mask + temp + decimal;
        }
    }),
});