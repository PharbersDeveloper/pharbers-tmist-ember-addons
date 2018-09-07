import Component from '@ember/component';
import layout from '../templates/components/accordion-hospital';
import styles from '../styles/accordion-hospital';
import { computed, observer } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    integerIndex: 0,
    initHospInput: observer('data', function() {
        // let hospitalsmany = this.get('data').length;
        // let input = this.get('data').map((item) => {
        //     let hospdetailinput = {};
        //     hospdetailinput.hosp_id = item.id;
        //     hospdetailinput.medicines = [];
        //     let medicine = item.medicines.map((medic) => {
        //         let hospitalinputmedic = {};
        //         hospitalinputmedic.medic_id = item.id;
        //         hospitalinputmedic.target = "";
        //         hospitalinputmedic.target_growth = "";
        //         hospitalinputmedic.budget = "";
        //         hospitalinputmedic.budget_percent = "";
        //         hospitalinputmedic.rep = {};
        //         hospitalinputmedic.rep.rep_id = '';
        //         hospitalinputmedic.rep.rep_name = "";
        //         hospitalinputmedic.rep.rep_avatar = "";
        //         hospitalinputmedic.rep.asignday = "";
        //         hospitalinputmedic.managerwith = "";
        //         return hospitalinputmedic;
        //     })
        //     hospdetailinput.medicines = medicine;
        //     return hospdetailinput;
        // });

    }),
    init() {
        this._super(...arguments);
        this.sendAction('getHospInfo', this);
        this.inputarea = localStorage.getItem('hospInputObject');
    },
    actions: {
        changeHospInput(hospid) {
            console.log(hospid)
        }
    }
});