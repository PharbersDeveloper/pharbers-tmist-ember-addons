import Component from '@ember/component';
import layout from '../templates/components/vertical-tabs';
import styles from '../styles/vertical-tabs';

export default Component.extend({
    layout,
    styles,
    init() {
        this._super(...arguments);
        this.data = {
            "medicines": [{
                "id": "drug0001",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "口服抗生素",
                "name": "舒普深",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }, {
                "id": "drug0002",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "口服抗生素",
                "name": "舒普深",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }],
            "notices": [{
                "id": "notice0001",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "医院通知",
                "name": "通知",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }, {
                "id": "notice0002",
                "avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
                "class": "药品通知",
                "name": "通知",
                "missionValue": 48903384,
                "feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
                "heal": ['治疗院内感染'],
                "department": ['呼吸', '急诊', 'ICU'],
                "desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
            }],
        }
    },
});