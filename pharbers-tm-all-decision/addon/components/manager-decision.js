import Component from '@ember/component';
import layout from '../templates/components/manager-decision';
import styles from '../styles/manager-decision';
import { computed, observer} from '@ember/object';
import { on } from '@ember/object/evented';

export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    mdata: null,
    localClassNames: 'manager-decision',
    // 1v1能力辅导
    watching: on('init', observer('repList.@each.sales_train', function() {
        let totalSalesTrain = this.get('getStore').peekAll('repinputinfo').reduce((acc, cur) => Number(acc) + (Number(cur.sales_train) || 0), 0);
        this.get('getStore').peekAll('managerinputinfo').firstObject.set('sales_train', totalSalesTrain);
    })),
    init() {
        this._super(...arguments);
        this.sendAction('getHospCardInfo', this);
        this.sendAction('getInputCard', this);
        this.sendAction('getManagerTime', this);

        this.get('repList').forEach(elem => {
            let cache = localStorage.getItem('repinfo_' + this.get('uuid') + "_" + elem.id);
            if(cache) {
                this.get('getStore').pushPayload(JSON.parse(cache))
            }
        });
        
        this.set('mdata', this.get('getStore').peekAll('managerinputinfo').firstObject)        
    },
    getStore: computed('data', function() {
        return this.get('data').firstObject.store
    }),
    actions: {
        getMandNs(component) {
            this.sendAction('getMandNs', component);
        },
    }
})