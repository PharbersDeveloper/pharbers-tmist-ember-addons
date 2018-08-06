import Component from '@ember/component';
import layout from '../templates/components/drug-item';
import styles from '../styles/drug-item';

export default Component.extend({
	layout,
	styles,
	tagName: '',
	init() {
		this._super(...arguments);
		this.item = {
			"avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
			"class": "口服抗生素",
			"name": "舒普深",
			"missionValue": 48903384,
			"feature": "耐药率低，安全性高，疗效好，对于肠杆菌科和非发酵菌均有较好的疗效.",
			"heal": ['治疗院内感染'],
			"department": ['呼吸', '急诊', 'ICU'],
			"desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
		}
	},
});