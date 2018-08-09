import Component from '@ember/component';
import {
    computed
} from '@ember/object';
import Table from 'ember-light-table';
import layout from '../templates/components/detail-table';
import styles from '../styles/detail-table';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'table-container',
    classNames: ['table-center'],
    selfheight: '180px',
    sort: '',
    dir: 'asc',
    // sortedModel: computed.sort('model', 'sortBy').readOnly(),
    sortedModel: computed.sort('data.columnsValue', 'sortBy').readOnly(),

    sortBy: computed('dir', 'sort', function() {
        return [`${this.get('sort')}:${this.get('dir')}`];
    }).readOnly(),
    setRows: function(rows, that) {
        that.get('table').setRows([]);
        that.get('table').setRows(rows);
    },
    filterAndSortModel: function(that) {
        let model = that.get('sortedModel');
        that.get('setRows')(model, that);
    },
    columns: [],
    // table: computed('model', function() {
    //     return new Table(this.get('columns'), this.get('model'));
    // }),
    table: computed('data.columnsValue', function() {
        return new Table(this.get('data.columns'), this.get('data.columnsValue'));
    }),
    actions: {
        onColumnClick(column) {
            if (column.sorted) {
                this.setProperties({
                    dir: column.ascending ? 'asc' : 'desc',
                    sort: column.get('valuePath'),
                });
                this.set('sort', column.get('valuePath'))

                this.get('filterAndSortModel')(this);
            }
        }
    },
    init() {
        this._super(...arguments);
        this.data = {
            "columns": [{
                label: '产品名称',
                valuePath: 'brand_name',
                width: '100px',
                align: 'center',
                sorted: false,

            }, {
                label: '市场销售额',
                valuePath: 'potential',
                width: '100px',
                align: 'center',
                cellComponent: 'table-number-thousands'
            }, {
                label: '市场增长(%)',
                valuePath: 'market_growth',
                width: '100px',
                align: 'center',
                cellComponent: 'table-number-percent'

            }, {
                label: '当期销售额',
                valuePath: 'sales',
                width: '100px',
                align: 'center',
                cellComponent: 'table-number-thousands'
            }, {
                label: '销售增长(%)',
                valuePath: 'sales_growth',
                width: '100px',
                align: 'center',
                cellComponent: 'table-number-percent'
            }, {
                label: 'EV值(%)',
                valuePath: 'ev_value',
                width: '80px',
                align: 'center',
                cellComponent: 'table-number-percent'
            }, {
                label: '份额(%)',
                valuePath: 'share',
                width: '80px',
                align: 'center',
                cellComponent: 'table-number-percent'
            }, ],
            "columnsValue": [{
                    "brand_name": "示例产品1",
                    "potential": 1349865,
                    "market_growth": 0.3,
                    "sales": 5861965,
                    "sales_growth": 0.7,
                    "ev_value": 0.4,
                    "share": 0.3,

                },
                {
                    "brand_name": "示例产品2",
                    "potential": 1349755,
                    "market_growth": 0.2,
                    "sales": 5861795,
                    "sales_growth": 0.66,
                    "ev_value": 0.1,
                    "share": 0.56,

                },
                {
                    "brand_name": "示例产品3",
                    "potential": 1349255,
                    "market_growth": 0.5,
                    "sales": 583495,
                    "sales_growth": 0.46,
                    "ev_value": 0.61,
                    "share": 0.22,

                }
            ],
        }
    },

});