import Component from '@ember/component';
import layout from '../templates/components/accordion-hospital';
import styles from '../styles/accordion-hospital';
import { computed, observer } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    integerIndex: 0,
    initHospInput: computed('data', function() {
        let alreadyinput = this.get('inputarea');
        if (alreadyinput == null) {
            let input = this.get('data').map((item) => {
                let hospdetailinput = {};
                hospdetailinput.hosp_id = item.hospital.id;
                hospdetailinput.medicines = [];
                let medicine = item.hospmedicinfos.map((medic) => {
                    let hospitalinputmedic = {};
                    hospitalinputmedic.medic_id = medic.id;
                    hospitalinputmedic.target_budget = [
                        { key: "target", title: "指标设定", subtitle: "指标增长", value: "", change: "" },
                        { key: "budget", title: "预算分配", subtitle: "预算所占", value: "", change: "" }
                    ];
                    hospitalinputmedic.rep = {};
                    hospitalinputmedic.rep.rep_id = '';
                    hospitalinputmedic.rep.rep_name = "";
                    hospitalinputmedic.rep.rep_avatar = "";
                    hospitalinputmedic.rep.inputarea = [
                        { key: "asignday", title: '', value: "" },
                        // {key: }
                    ];

                    hospitalinputmedic.rep.asignday = "";
                    hospitalinputmedic.managerwith = "";
                    return hospitalinputmedic;
                });
                hospdetailinput.medicines = medicine;
                return hospdetailinput;
            });
            console.log(input)
            return input;
        } else {
            return alreadyinput
        }

        console.log(input);
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