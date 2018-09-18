import Component from '@ember/component';
import layout from '../templates/components/accordion-hospital';
import styles from '../styles/accordion-hospital';
import { computed, observer } from '@ember/object';
import { once, later } from '@ember/runloop';

export default Component.extend({
    layout,
    styles,
    integerIndex: 0,
    currentHospitalId: 0,
    getStore: computed('data', function() {
        return this.get('data').firstObject.store
    }),
    watching: observer('data.@each.target', 'data.@each.budget', 'data.@each.asignday', 'data.@each.managerwith', 'data.@each.representative', function() {
        once(this, 'execute')
    }),
    execute() {
        function groupBy(objectArray, property) {
            return objectArray.reduce(function(acc, obj) {
                var key = obj[property];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {});
        }

        //人物分配sum时间
        let cache = this.get('getStore').peekAll('hospitalbaseinfo').map(elem => {
            if (elem.representative !== null && elem.budget !== undefined) {
                return { allot_data: Number(elem.asignday) || 0, representative: elem.representative.id || "", budget: Number(elem.budget), managerwith: Number(elem.managerwith) }
            }
        }).filter(elem => elem !== undefined);

        let gval = groupBy(cache, 'representative');

        Object.keys(gval).forEach(elem => {
            let sum = gval[elem].reduce((acc, cur) => acc + cur.allot_data, 0);
            let model = this.get('getStore').peekRecord('repinputinfo', elem)
            model.set('used_days', sum)
        });

        //预设budget 总值
        let medic = this.get('getStore').peekAll('hospitalbaseinfo').firstObject.hospmedicinfos.firstObject;
        let defaultBudget = medic.total_budget;
        console.log('in accordion ')

        //预算sum
        let budget = cache.reduce((acc, cur) => acc + cur.budget, 0);
        this.sendAction('totalBugdetRatio', budget, defaultBudget);

        //协助拜访sum
        let managerwith = cache.reduce((acc, cur) => acc + cur.managerwith, 0);
        this.get('getStore').peekAll('managerinputinfo').firstObject.set('field_work', managerwith);

        // 初始化加载经理分配时间
        let managerinputcache = localStorage.getItem('managerinput');
        if (managerinputcache) {
            this.get('getStore').pushPayload(JSON.parse(managerinputcache));
        }
    },
    init() {
        this._super(...arguments);
        this.sendAction('getHospInfo', this);

        // 临时解决，明天把getStore变成Promise或者组件层级重写
        later(this, function() {
            let cache = this.get('getStore').peekAll('hospitalbaseinfo').map(elem => {
                if (elem.representative !== null && elem.budget !== undefined) {
                    return { budget: Number(elem.budget) }
                }
            }).filter(elem => elem !== undefined);

            //预设budget 总值
            let medic = this.get('getStore').peekAll('hospitalbaseinfo').firstObject.hospmedicinfos.firstObject;
            let defaultBudget = medic.total_budget;
            console.log('in accordion ')

            //预算sum
            let budget = cache.reduce((acc, cur) => acc + cur.budget, 0);
            this.sendAction('totalBugdetRatio', budget, defaultBudget);

        }, 5000)
    },
    //这块儿逻辑写错了，应该是观察model然后set，不应该是在键盘Event上，首先需要想一下，有关系属性改变数值时如何做到同步更新关系
    setInput(repId) {
        let hospitalRecord = this.get('getStore').peekRecord('hospitalbaseinfo', this.get('currentHospitalId'));
        if (repId) {
            let repRecord = this.get('getStore').peekRecord('representative', repId);
            hospitalRecord.set('representative', repRecord);
        }
        let recordJsonApi = this.get('getStore').object2JsonApi('hospitalbaseinfo', hospitalRecord, false);

        localStorage.setItem('hospinput_' + this.get('uuid') + "_" + this.get('currentHospitalId'), JSON.stringify(recordJsonApi));
    },
    actions: {
        changeHospInput(hospid) {
            this.set('currentHospitalId', hospid);
        },
        hospInput() {
            this.setInput()
        },
        chooseRep(repid) {
            this.setInput(repid)
        }
    }
});