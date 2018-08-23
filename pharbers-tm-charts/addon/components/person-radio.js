import Component from '@ember/component';
import layout from '../templates/components/person-radio';
import styles from '../styles/person-radio';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'person-radio',
    optionResult: computed('data', function() {
        let data = this.get('data');
        let ability = [];
        ability.push(data.sales_skills_val || 0);
        ability.push(data.prod_knowledge_val || 0);
        ability.push(data.motivation_val || 0);
        ability.push(data.overall_val || 0);

        return {
            title: {
                // text: "能力值展示雷达图",
            },
            tooltip: {},
            // legend: {
            //     data: ['能力分配', ]
            // },
            radar: {
                shape: 'circle',
                center: ['50%', '50%'],
                radius: 50,
                indicator: [
                    { name: '销售技巧', max: 100 },
                    { name: '产品知识', max: 100 },
                    { name: '工作积极性', max: 100 },
                    { name: '总能力值', max: 100 },
                ],
                name: {
                    // formatter: '{value}',
                    textStyle: {
                        color: '#72ACD1'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(114, 172, 209, 0.2)',
                            'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                            'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'
                        ],
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            series: [{
                name: '各项能力值',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [{
                        value: ability,
                        name: '能力分配',
                        areaStyle: {
                            normal: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        lineStyle: {
                            color: "#304553",
                        }
                    },
                    // {
                    //     value: [62, 23, 23, 56, ],
                    //     name: '实际开销（Actual Spending）'
                    // }
                ]
            }]
        }
    }),


    // _t: null,
    //
    // loadingOptions: {
    //     text: '加载中...',
    //     color: '#4413c2',
    //     textColor: '#270240',
    //     maskColor: 'rgba(194, 88, 86, 0.3)',
    //     zlevel: 0
    // },
    //
    // onChartReady(chart) {
    //     this.set('_t', setTimeout(() => {
    //         chart.hideLoading();
    //     }, 0));
    // },
});