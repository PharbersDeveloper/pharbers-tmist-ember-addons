import Component from '@ember/component';
import layout from '../templates/components/accordion-hospital';
import styles from '../styles/accordion-hospital';
import { computed, observer } from '@ember/object';
import { once } from '@ember/runloop';
export default Component.extend({
    layout,
    styles,
    integerIndex: 0,
    // initHospInput: computed('data', function() {
    //     let alreadyinput = this.get('inputarea');
    //     if (alreadyinput == null) {
    //         let input = this.get('data').map((item) => {
    //             let hospdetailinput = {};
    //             hospdetailinput.hosp_id = item.hospital.id;
    //             hospdetailinput.medicines = [];
    //             let medicine = item.hospmedicinfos.map((medic) => {
    //                 let hospitalinputmedic = {};
    //                 hospitalinputmedic.medic_id = medic.id;
    //                 hospitalinputmedic.target_budget = [
    //                     { key: "target", title: "指标设定", subtitle: "指标增长", value: "", change: "" },
    //                     { key: "budget", title: "预算分配", subtitle: "预算所占", value: "", change: "" }
    //                 ];
    //                 hospitalinputmedic.rep = {};
    //                 hospitalinputmedic.rep.rep_id = '';
    //                 hospitalinputmedic.rep.rep_name = "";
    //                 hospitalinputmedic.rep.rep_avatar = "";
    //                 hospitalinputmedic.rep.inputarea = [
    //                     { key: "asignday", title: '分配', value: '' },
    //                     { key: "managerwith", title: '经理陪同', value: '' }
    //                 ];
    //                 return hospitalinputmedic;
    //             });
    //             hospdetailinput.medicines = medicine;
    //             return hospdetailinput;
    //         });
    //         return input;
    //     } else {
    //         return alreadyinput
    //     }
    // }),
    // flatten(arr) {
    //     while (arr.some(item => Array.isArray(item))) {
    //         arr = [].concat(...arr);
    //     }
    //     return arr;
    // },
    init() {
        this._super(...arguments);
        this.sendAction('getHospInfo', this);
    },

    // hospital: computed('initHospInput.@each', function() {
    //     console.log('hospital')
    //     return this.flatten(this.get('initHospInput'));
    // }),
    // medicine: computed('hospital.@each.medicines', function() {
    //     console.log('medicine');
    //     return this.flatten(this.get('hospital').mapBy('medicines'));
    // }),
    // budgetAndTarget: computed('medicine.@each.target_budget', function() {
    //     console.log('budgetAndTarget');
    //     return this.flatten(this.get('medicine').mapBy('target_budget'));
    // }),
    // watchData: observer('budgetAndTarget.@each.value', function() {
    //     once(this, 'execute');
    // }),
    // execute() {
    //     let totalHosp = JSON.parse(localStorage.getItem('hospInputObject'));
    //     let currentHospId = this.get('currentHospId');
    //     let uuid = this.get('uuid');
    //     let rep = "";
    //     if (uuid == totalHosp.uuid) {
    //         let object = totalHosp.values.filter((ele) => {
    //             return ele.hosp_id != currentHospId
    //         });
    //         let localhosp = this.get(hospital);
    //         let medic = "";
    //         localhosp.map((hosp) => {
    //             if (hosp.hosp_id == currentHospId) {
    //                 medic = hosp.medicines.map((medic) => {
    //                     return medic.target_budget.map((item) => {
    //                         if (item.key == "target") {
    //                             let val = Number(item.value);
    //                             Ember.set(item, 'change', val);
    //                         } else if (item.key == "budget") {
    //                             let val = Number(item.value);
    //                             Ember.set(item, 'change', val);
    //                         }
    //
    //                     })
    //                 })
    //             }
    //         });
    //         object.pushObject({
    //             hosp_id: currentHospId,
    //             medicines: medic
    //         });
    //         totalHosp.values.clear();
    //         totalHosp.values = object;
    //         totalHosp.uuid = this.get('uuid');
    //     }
    //     localStorage.setItem('hospInputObject', JSON.stringify(totalHosp));
    // },
    actions: {
        changeHospInput(hospid) {
            // this.set('currentHospId', hospid);
            this.sendAction('changeHospInput', hospid);
        },
        hospInput(id) {
            this.sendAction('hospInput', id);
        },
        chooseRep(repid) {
            this.sendAction('chooseRep', repid);
        }
    }
});