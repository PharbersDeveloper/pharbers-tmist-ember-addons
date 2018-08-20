import Component from '@ember/component';
import layout from '../templates/components/hospital-list';
import styles from '../styles/hospital-list';

export default Component.extend({
        layout,
        tagName: '',
        styles,
        actions: {
            changeData(data) {
                // window.console.info(data);
            },
            linkPage(hid) {
                this.sendAction('linkPage', hid)
            }
        },
        init() {
            this._super(...arguments);
            let uuid = this.uuid;
            let hosplist = this.data.map((hosp) => {
                return { "hospital_id": hosp.id, "represent": "" }
            })
            let init = function() {
                let object = {
                    uuid: uuid,
                    values: hosplist
                }
                localStorage.setItem('hospital_medicines', JSON.stringify(object));
            }
            let medicines = localStorage.getItem('hospital_medicines');
            if (medicines == null || medicines == undefined) {
                init()
            } else {
                if (JSON.parse(medicines).uuid != uuid) {
                    init()
                }
            }
        },
    })
    .reopenClass({
        positionalParams: ['data']
    });