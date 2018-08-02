import Component from '@ember/component';
import layout from '../templates/components/all-rep';
import styles from '../styles/all-rep';

export default Component.extend({
    layout,
    styles,
    tagName: '',
    actions: {
        showMore(rid) {
            //  进一步发送动作
            this.sendAction('showDetail', rid)
        }
    }
}).reopenClass({
    positionalParams: ['allReps']
});