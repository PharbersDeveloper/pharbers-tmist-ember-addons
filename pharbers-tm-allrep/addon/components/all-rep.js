import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/all-rep';
import styles from '../styles/all-rep';

export default Component.extend({
    layout,
    styles,
    tagName: '',
    detail: computed('allReps.detail', function() {
        // body
        let reps = this.get('allReps');
        return reps.detail;
    }),
    actions: {
        showMore(rid) {
            //  进一步发送动作
            this.sendAction('showDetail', rid)
        },
        hideDetail() {
            this.sendAction('hideDetail')
        }
    }
}).reopenClass({
    positionalParams: ['allReps', 'isShowList']
});
