import Component from '@ember/component';
import layout from '../templates/components/target-rep-detail';
import styles from '../styles/target-rep-detail';

export default Component.extend({
	layout,
	styles,
	init() {
		this._super(...arguments);
		this.data = {
			"id": "thisisxiaosong",
			"back": "www.baidu.com",
			"avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
			"name": "小松",
			"self": ['28岁', '研究生', '英语专业', '3年工作经验', '入职一年'],
			"square": [{
				"title": "业务经验",
				"value": ["心血管类", "抗生素类"]
			}, {
				"title": "优势",
				"value": ["客情关系", "学习能力", "幻灯演讲"]
			}, {
				"title": "代提高",
				"value": ["产品知识", "科室会", "专业性的拜访"]
			}],
			"scores": [{
				"title": "销售技巧",
				"score": 45,
			}, {
				"title": "产品知识",
				"score": 56,
			}, {
				"title": "工作积极性",
				"score": 65,
			}]
		}
	},
});