import Component from '@ember/component';
import layout from '../templates/components/nav-tool';
import styles from '../styles/nav-tool';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
    ajax: inject(),
    getAjaxOpt(data) {
        return {
            method: 'POST',
            dataType: 'json',
            cache: false,
            data: JSON.stringify(data),
            contentType: 'application/json',
            Accpt: 'application/json'
        }
    },
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
            percentObject.id = manpower[i].id;
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
        // console.log(this.uuid);
    },
    actions: {
        submit(text) {
            // this.sendAction('submit', text);
            let allHospMedics = JSON.parse(localStorage.getItem('hospital_medicines'));
            let managerTime = JSON.parse(localStorage.getItem('manager_time'));
            let repTime = JSON.parse(localStorage.getItem('manager_rep_time'));
            console.log(allHospMedics);
            let manager = {};
            let rep_manager = [];
            let task = [];
            managerTime.values.map((ele) => {
                if (ele.key === "kpi") {
                    Ember.set(manager, 'kpi_analysis', +ele.value)
                } else if (ele.key === "team_building") {
                    Ember.set(manager, 'team_meet', +ele.value)
                } else if (ele.key === "administrative") {
                    Ember.set(manager, 'admin_work', +ele.value)
                }
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                let coach = repTime.values.map(function(elem) {
                    return parseInt(elem.attrs.find(function(ele) {
                        return ele.key === 'coach'
                    }).value || 0)
                }).reduce(reducer);
                let assist = repTime.values.map(function(elem) {
                    return parseInt(elem.attrs.find(function(ele) {
                        return ele.key === 'assist'
                    }).value || 0)
                }).reduce(reducer);
                Ember.set(manager, 'sales_train', coach)
                Ember.set(manager, 'field_work', assist)
            })
            // console.log(manager);
            let teamMeet = manager.team_meet;
            repTime.values.map((ele) => {
                let rep = {};
                Ember.set(rep, 'rep_id', ele.repId);
                ele.attrs.map((attr) => {
                    if (attr.key == "assist") {
                        // 协助拜访
                        Ember.set(rep, 'field_work', +attr.value);
                    } else if (attr.key == "product_training") {
                        // 脱岗产品培训
                        Ember.set(rep, 'product_train', +attr.value);
                    } else {
                        //  key:coach。能力辅导
                        Ember.set(rep, 'sales_train', +attr.value);
                    }
                })
                Ember.set(rep, 'team_meet', teamMeet);
                rep_manager.pushObject(rep);
            });
            // console.log(rep_manager);
            allHospMedics.values.map((ele) => {
                if (ele.hasOwnProperty('medicines')) {
                    ele.medicines.map((medic) => {
                        let hosp = {};
                        Ember.set(hosp, "dest_id", ele.hospital_id);
                        Ember.set(hosp, "rep_id", ele.represent);
                        Ember.set(hosp, "goods_id", medic.medicid);
                        medic.attrs.map((attr) => {
                            if (attr.key == "indicators_setting") {
                                // 指标设定
                                Ember.set(hosp, 'user_input_target', +attr.value);
                                Ember.set(hosp, 'target_growth', +attr.computedVal);

                            } else if (attr.key == "budget_setting") {
                                // 预算分配
                                Ember.set(hosp, 'user_input_money', +attr.value);
                                Ember.set(hosp, 'budget_proportion', +attr.computedVal);

                            } else {
                                // key: time_setting;
                                Ember.set(hosp, "user_input_day", +attr.value);
                            }
                        })
                        task.pushObject(hosp);
                    })
                }

            })
            // console.log(task)
            let condition = {
                "token": this.cookies,
                "timestamp": 1530689119000,
                "version": {
                    "major": 1,
                    "minor": 0
                },
                "data": {
                    "type": "task_allot",
                    "condition": {
                        "uuid": this.uuid
                    }
                },
                "task": task,
                "manager": manager,
                "rep_manage": rep_manager,
            }
            // console.log(condition)
            this.get('ajax')
                .request('/api/proposal/task/allot', this.getAjaxOpt(condition))
                .then((res) => {
                    if (res.status === "ok") {
                        console.log(res.result.data.attribute)
                        // return res.result.data.attribute;
                    } else {
                        console.log(res.error)
                        // return res.error.message
                    }
                })
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

                JSON.parse(allHospMedics).values.map((ele) => {
                    if (ele.represent != "") {
                        if (ele.medicines != undefined) {
                            ele.medicines.map((mele) => {
                                mele.attrs.map((iele) => {
                                    if (iele.key === "time_setting" && iele.value !== "") {
                                        let repre = {
                                            "used": +iele.value,
                                            // "name": ele.represent,
                                            "id": ele.represent
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
                    // Ember.set(repused, 'name', ele.repName);
                    Ember.set(repused, 'id', ele.repId);
                    hMused.pushObject(repused)
                })
            };
            let repre = this.groupBy(hMused, function(item) {
                // return [item.name];
                return [item.id];
            });
            const reducer = (prev, curre) => prev.used + curre.used;

            for (let i = 0, len = repre.length; i < len; i++) {
                oldManpower.map((ele) => {
                    // if (ele.name == repre[i][0].name) {
                    if (ele.id == repre[i][0].id) {

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