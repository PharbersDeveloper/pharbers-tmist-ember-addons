import Component from '@ember/component';
import {
    computed
} from '@ember/object';
import Table from 'ember-light-table';
import layout from '../templates/components/result-table';
import styles from '../styles/result-table';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'table-container',
    classNames: ['table-center'],
    selfheight: '480px',
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


});