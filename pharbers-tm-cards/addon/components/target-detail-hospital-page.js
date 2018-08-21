import Component from '@ember/component';
import layout from '../templates/components/target-detail-hospital-page';
import styles from '../styles/target-detail-hospital-page';

export default Component.extend({
	layout,
	styles,
	classNames: [],
	localClassNames: 'hospital-detail',
	init() {
		this._super(...arguments);
		this.data = {
			"patients_payment_capacity": "中",
			"hosp_level": "三级",
			"surgery_yearly": 10500,
			"hosp_name": "人民医院",
			"represents": [{
				"rep_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_seller.png",
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
			}],
			"academic_influence": "高",
			"focus_department": "神经内科;骨科;心血管内科",
			"department": "神经内科;感染疾病科;骨科;消化内科;胸外科;妇产科;普通外科",
			"hosp_category": "综合",
			"status": [{
				"cycle": "周期一",
				"name": "XXXXX",
				"content": "最近由于同事得到提升而垂头丧气,对个人未来发展感到茫然"
			}, {
				"cycle": "周期二",
				"name": "XXXXX",
				"content": "最近由于同事得到提升而垂头丧气,对个人未来发展感到茫然,最近由于同事得到提升而垂头丧气,对个人未来发展感到茫然,最近由于同事得到提升而垂头丧气,对个人未来发展感到茫然"
			}],
			"id": "5b641342aa8de31ed8fb11e3",
			"academic_acceptance_rate": "高",
			"drug_intake": "",
			"init_time": 1920,
			"client_grade": "",
			"inpatient_yearly": 30000,
			"type": "hosp",
			"patients_distribution_department": "神经内科;骨科;心血管内科",
			"hosp_image": "https://pharbers-images.oss-cn-beijing.aliyuncs.com/pharbers-tm-hospital-list-ember-addon/hosp_avatar.png",
			"outpatient_yearly": 675000,
			"beds": 1000,
			"featured_outpatient": "神经内科"
		}
	},
});