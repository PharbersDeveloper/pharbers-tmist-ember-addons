import Component from '@ember/component';
import layout from '../templates/components/hospital-list';
import styles from '../styles/hospital-list';

export default Component.extend({
        layout,
        tagName: 'div',
        styles,
        actions: {
            changeData(data) {
                // window.console.info(data);
            },
            linkPage(hid) {
                this.sendAction('linkPage', hid)
            }
        }
    })
    .reopenClass({
        positionalParams: ['data']
    });