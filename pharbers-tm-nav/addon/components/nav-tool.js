import Component from '@ember/component';
import layout from '../templates/components/nav-tool';
import styles from '../styles/nav-tool';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    tagName: 'div',
    localClassNames: 'menu-bar',
    budgetPerc: computed('data.budget', 'data.budget.used', function() {
        let budget = this.get('data.budget');
        let percent = (budget.used) / (budget.total) * 100;
        return percent;
    }),
    manpowerPerc: computed('data.manpower', 'data.manpower.@each.used', function() {
        let manpower = this.get('data.manpower');
        let newManpower = [];
        for (let i = 0, len = manpower.length; i < len; i++) {
            let percentObject = {};
            percentObject.name = manpower[i].name;
            percentObject.used = manpower[i].used;
            percentObject.total = manpower[i].total;
            percentObject.percent = ((manpower[i].used / manpower[i].total) * 100).toFixed(0);
            newManpower.push(percentObject);
        }
        return newManpower;
    }),
    groupBy(array, f) {
        var groups = {};
        array.forEach(function(o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function(group) {
            return groups[group];
        });
    },
    init() {
        this._super(...arguments);
        this.navs = [
            { "id": 'notice', "text": "通知" },
            { "id": 'infobase', "text": "信息库" },
            { "id": "decision", "text": "团队培养" }
        ];
        // this.hMInputs = JSON.parse(localStorage.getItem('hospital_medicines'));
    },
    actions: {
        submit(text) {
            this.sendAction('submit', text)
        },
        onclick(id) {
            this.sendAction('onclick', id);
        },
        reCalc() {
            let allHospMedics = localStorage.getItem('hospital_medicines');
            if (allHospMedics != null || allHospMedics != undefined) {
                let used = 0;
                let usedBudget = JSON.parse(allHospMedics).values.map((ele) => {
                    if (ele.medicines) {
                        ele.medicines.map((mele) => {
                            mele.attrs.map((iele) => {
                                if (iele.key === "budget_setting" && iele.value !== "") {
                                    used += +iele.value
                                }
                            })
                        })
                    }
                })
                this.set('data.budget.used', used)
            }

        },
        reCalcMan() {
            let allHospMedics = localStorage.getItem('hospital_medicines');
            let managerTime = localStorage.getItem('manager_time');
            let repTime = localStorage.getItem('manager_rep_time');
            let oldManpower = this.get('data.manpower')
            let hMused = [];
            let totalTeamBuilding = 0;
            let managerUsed = 0;
            if (allHospMedics != null || allHospMedics != undefined) {
                /*let usedBudget = JSON.parse(allHospMedics).values.map((ele) => {
                    oldManpower.map((mp) => {
                        if (mp.name === ele.represent) {
                            let used = 0;
                            ele.medicines.map((mele) => {
                                mele.attrs.map((iele) => {
                                    if (iele.key === "time_setting" && iele.value !== "") {
                                        used += +iele.value;
                                    }
                                })
                            });
                            Ember.set(mp, 'used', used)
                        }
                    })
                })*/
                JSON.parse(allHospMedics).values.map((ele) => {
                    if (ele.represent != "") {
                        if (ele.medicines != undefined) {
                            ele.medicines.map((mele) => {
                                mele.attrs.map((iele) => {
                                    if (iele.key === "time_setting" && iele.value !== "") {
                                        let repre = {
                                            "used": +iele.value,
                                            "name": ele.represent,
                                            "id": ""
                                        }
                                        hMused.pushObject(repre)
                                    }
                                })
                            });
                            // Ember.set(mp, 'used', used)
                        }
                    }
                })
            };
            if (managerTime != null || managerTime != undefined) {
                JSON.parse(managerTime).values.map((ele) => {
                    if (ele.key == "team_building") {
                        totalTeamBuilding = +ele.value;
                    }
                    managerUsed += +ele.value;

                })
            };
            if (repTime != null || repTime != undefined) {
                JSON.parse(repTime).values.map((ele) => {
                    let repused = {};
                    let used = 0;
                    ele.attrs.map((attr) => {
                        used += +attr.value
                        if (attr.key != "product_training") {
                            managerUsed += +attr.value
                        }
                    })
                    Ember.set(repused, 'used', used);
                    Ember.set(repused, 'name', ele.repName);
                    Ember.set(repused, 'id', ele.repId);
                    hMused.pushObject(repused)
                })
            };
            let repre = this.groupBy(hMused, function(item) {
                return [item.name]
            });
            const reducer = (prev, curre) => prev.used + curre.used;

            for (let i = 0, len = repre.length; i < len; i++) {
                oldManpower.map((ele) => {
                    if (ele.name == repre[i][0].name) {
                        if (repre[i].length == 1) {
                            Ember.set(ele, 'used', repre[i][0].used + totalTeamBuilding)
                        } else {
                            Ember.set(ele, 'used', repre[i].reduce(reducer) + totalTeamBuilding)
                        }
                    }
                })
            };
            console.log(managerUsed)
        }
    }
});