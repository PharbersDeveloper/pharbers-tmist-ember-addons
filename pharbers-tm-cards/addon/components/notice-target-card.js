import Component from '@ember/component';
import layout from '../templates/components/notice-target-card';
import styles from '../styles/notice-target-card';

export default Component.extend({
	layout,
	styles,
	init() {
		this._super(...arguments);
		this.data = [{
			"avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
			"class": "口服抗生素",
			"name": "舒普深",
			"missionValue": 48903384,
			"desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。"
		}, {
			"avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
			"class": "口服抗生素",
			"name": "舒普深",
			"missionValue": 48903384,
			"desc": "由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务。由于国家限抗令的实施，许多医院开始作出相应处方限制，但抗生素是公司重点产品。公司下达保持份额的指标任务"
		}]
	},
});