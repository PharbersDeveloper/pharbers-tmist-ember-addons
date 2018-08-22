import Component from '@ember/component';
import layout from '../templates/components/rep-input-card';
import styles from '../styles/rep-input-card';

export default Component.extend({
	layout,
	styles,
	init() {
		this._super(...arguments);
		this.data = [{
			"rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
			"intro": "医学院校临床专业毕业,是一位善于发现客户需求，善于探查客户心理。但最近由于同事得到提升而垂头丧气，导致对个人未来发展感到茫然",
			"motivation_val": 45,
			"overall_val": 62,
			"entry_time": 3,
			"profe_bg": "医学院校临床专业毕业",
			"weakness": "最近由于同事得到提升而垂头丧气;对个人未来发展感到茫然",
			"rep_name": "小宋",
			"advantage": "善于发现客户需求;善于探查客户心理",
			"age": 37,
			"sales_skills_val": 70,
			"business_exp": "抗肿瘤类;心血管类",
			"rep_level": "senior",
			"id": "5b43564ded925c05565b5c33",
			"education": "本科",
			"prod_knowledge_val": 70,
			"service_year": 8
		}, {
			"rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
			"intro": "贵州医学院临床专业毕业,最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
			"motivation_val": 85,
			"overall_val": 79,
			"entry_time": 3,
			"profe_bg": "贵州医学院临床专业毕业",
			"weakness": "最近由于同事得到提升而为同事高兴，希望通过自己的努力租的起北京的房子",
			"rep_name": "老张",
			"advantage": "善于鼓舞士气，善于探查客户心理",
			"age": 37,
			"sales_skills_val": 76,
			"business_exp": "抗肿瘤类;心血管类",
			"rep_level": "senior",
			"id": "5b43564ded925c05565b5c33",
			"education": "本科",
			"prod_knowledge_val": 84,
			"service_year": 8
		}]
	},
});