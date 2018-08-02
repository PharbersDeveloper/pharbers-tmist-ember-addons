import Component from '@ember/component';
import layout from '../templates/components/target-representative-card';
import styles from '../styles/target-representative-card';

export default Component.extend({
	layout,
	styles,
	tagName: '',
	init() {
		this._super(...arguments);
		this.data = [{
				"id": "firstrepresentive",
				"avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
				"name": '小宋',
				"showinfo": [{
					"key": "总能力值",
					"value": 45,
				}, {
					"key": "产品知识",
					"value": 54,
				}, {
					"key": "销售技巧",
					"value": 32,
				}, {
					"key": "工作积极性",
					"value": 21,
				}]
			},
			{
				"id": "second",
				"avatar": "http://img.informer.com/icons_mac/png/128/422/422255.png",
				"name": '小张',
				"showinfo": [{
					"key": "总能力值",
					"value": 45,
				}, {
					"key": "产品知识",
					"value": 54,
				}, {
					"key": "销售技巧",
					"value": 32,
				}, {
					"key": "工作积极性",
					"value": 21,
				}]
			}
		]
	},
	actions: {
		showMore(rid) {
			Ember.Logger.info(rid);
			this.sendAction('showMore', rid)
		}
	}
});