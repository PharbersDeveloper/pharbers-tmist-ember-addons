import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		// return [{
		// 	"name": "中日医院",
		// 	"hosp_level": "三级",
		// 	"hospid": "5b43118fed925c05565b5bfc",
		// 	"outpatient": 10000,
		// 	"department": "神经内科",
		// 	"medicines": [{
		// 			"name": "口服抗生素",
		// 			"contributionrate": 0.95,
		// 			"share": 0.16,
		// 			"id": "5b435533ed925c05565b5c2c",
		// 			"previoussales": 18888,
		// 			"potential": 54561334
		// 		},
		// 		{
		// 			"name": "小儿抗生素",
		// 			"contributionrate": 0.85,
		// 			"share": 0.3,
		// 			"id": "5b43557bed925c05565b5c2d",
		// 			"previoussales": 32000,
		// 			"potential": 54561334
		// 		},
		// 		{
		// 			"name": "静脉注射抗生素",
		// 			"contributionrate": 0.75,
		// 			"share": 0.42,
		// 			"id": "5b4355caed925c05565b5c2e",
		// 			"previoussales": 440000,
		// 			"potential": 54561334
		// 		}
		// 	],
		// 	"representives": [{
		// 		"name": "小宋",
		// 		"avatar": "/assets/images/hosp_seller.png"
		// 	}],
		// 	"category": "综合",
		// 	"surgery": 800,
		// 	"beds": 18000
		// }]
		return [{
			"type": "hosp_detail",
			"attribute": {
				"hospital": {
					"name": "中日医院",
					"basicinfo": [{
							"key": "医院类型",
							"value": "综合"
						},
						{
							"key": "医院等级",
							"value": "三级"
						},
						{
							"key": "病床数量",
							"value": "神经内科"
						},
						{
							"key": "特色科室",
							"value": 18000
						},
						{
							"key": "门诊人次/年",
							"value": 10000
						},
						{
							"key": "手术台数",
							"value": 800
						},
						{
							"key": "住院人数/年",
							"value": 1230
						}
					],
					"id": "5b43118fed925c05565b5bfc",
					"news": {},
					"policy": {}
				},
				"medicines": [{
						"competitionproducts": {
							"id": "5b435533ed925c05565b5c2c_competitionproducts",
							"value": []
						},
						"name": "口服抗生素",
						"history": {
							"id": "5b435533ed925c05565b5c2c_history",
							"value": [{
								"timemanagement": 11,
								"budgetallocation": 100,
								"growth": 1.6,
								"budgetratio": 1.5,
								"achievementrate": 1.1,
								"representative": "小宋",
								"target": 1001,
								"time": "周期4"
							}]
						},
						"id": "5b435533ed925c05565b5c2c",
						"overview": [{
								"key": "药品市场潜力",
								"value": 54561334
							},
							{
								"key": "增长潜力",
								"value": 0.94
							},
							{
								"key": "上期销售额",
								"value": 18888
							},
							{
								"key": "上期增长",
								"value": 0.19
							},
							{
								"key": "份额",
								"value": 0.16
							},
							{
								"key": "上期贡献率",
								"value": 0.95
							}
						],
						"detail": {
							"id": "5b435533ed925c05565b5c2c_detail",
							"value": [{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品1",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "口服抗生素"
								},
								{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品2",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "口服抗生素"
								},
								{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "口服抗生素"
								}
							]
						},
						"p_target": 1001
					},
					{
						"competitionproducts": {
							"id": "5b43557bed925c05565b5c2d_competitionproducts",
							"value": []
						},
						"name": "小儿抗生素",
						"history": {
							"id": "5b43557bed925c05565b5c2d_history",
							"value": [{
								"timemanagement": 22,
								"budgetallocation": 200,
								"growth": 1.6,
								"budgetratio": 1.5,
								"achievementrate": 2.2,
								"representative": "小李",
								"target": 2002,
								"time": "周期4"
							}]
						},
						"id": "5b43557bed925c05565b5c2d",
						"overview": [{
								"key": "药品市场潜力",
								"value": 54561334
							},
							{
								"key": "增长潜力",
								"value": 0.84
							},
							{
								"key": "上期销售额",
								"value": 32000
							},
							{
								"key": "上期增长",
								"value": 0.33
							},
							{
								"key": "份额",
								"value": 0.3
							},
							{
								"key": "上期贡献率",
								"value": 0.85
							}
						],
						"detail": {
							"id": "5b43557bed925c05565b5c2d_detail",
							"value": [{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品1",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "小儿抗生素"
								},
								{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品2",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "小儿抗生素"
								},
								{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品1",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "小儿抗生素"
								}
							]
						},
						"p_target": 2002
					},
					{
						"competitionproducts": {
							"id": "5b4355caed925c05565b5c2e_competitionproducts",
							"value": []
						},
						"name": "静脉注射抗生素",
						"history": {
							"id": "5b4355caed925c05565b5c2e_history",
							"value": [{
								"timemanagement": 33,
								"budgetallocation": 300,
								"growth": 1.6,
								"budgetratio": 1.5,
								"achievementrate": 3.3,
								"representative": "小李",
								"target": 3003,
								"time": "周期4"
							}]
						},
						"id": "5b4355caed925c05565b5c2e",
						"overview": [{
								"key": "药品市场潜力",
								"value": 54561334
							},
							{
								"key": "增长潜力",
								"value": 0.74
							},
							{
								"key": "上期销售额",
								"value": 440000
							},
							{
								"key": "上期增长",
								"value": 0.45
							},
							{
								"key": "份额",
								"value": 0.42
							},
							{
								"key": "上期贡献率",
								"value": 0.75
							}
						],
						"detail": {
							"id": "5b4355caed925c05565b5c2e_detail",
							"value": [{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品1",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "静脉注射抗生素"
								},
								{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品2",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "静脉注射抗生素"
								},
								{
									"selltime": 1984,
									"medicalinsurance": "医保类型",
									"product_name": "美素竞品2",
									"development": "研发类型",
									"treatmentarea": "治疗领域",
									"companyprice": 10,
									"type": "静脉注射抗生素"
								}
							]
						},
						"p_target": 3003
					}
				]
			}
		}]
	}
});