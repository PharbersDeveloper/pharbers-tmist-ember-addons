import Component from '@ember/component';
import layout from '../templates/components/hospital-detail';
import styles from '../styles/hospital-detail';

export default Component.extend({
        layout,
        styles,
        classNames: ['container'],
        localClassNames: 'hosp-detail',
        actions: {
            chooseRep(name) {
                this.sendAction('chooseRep', name);
            },
            getRep() {
                console.log('11111111111');
                //     console.log(this.data)
                //     this.data.component_data.map((ele) {
                //         if(ele.key == "target-detail")
                //     })
            }
        }
    })
    .reopenClass({
        positionalParams: ['data']
    });