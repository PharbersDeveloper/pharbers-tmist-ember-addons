import Component from '@ember/component';
import layout from '../templates/components/capability-radar';
import styles from '../styles/capability-radar';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'capability-radar',
    init() {
        this._super(...arguments);
        this.i = -1;
    },
    optionResult: computed('data', function() {
        let data = this.get('data');
        if (!isEmpty(data)) {

            let wordValue = [];
            wordValue.push(data.report_analysi_val);
            wordValue.push(data.market_insight_val);
            wordValue.push(data.target_setting_val);
            wordValue.push(data.strategy_execution_val);
            wordValue.push(data.resource_allocation_val);
            wordValue.push(data.plan_deployment_val);
            wordValue.push(data.leadership_val);
            wordValue.push(data.team_management_val);
            wordValue.push(data.talent_train_val);
            let numberValue = wordValue.map((word) => {
                if (word == 'A') {
                    return 4;
                } else if (word == 'B') {
                    return 3
                } else if (word == 'C') {
                    return 2
                } else if (word == 'D') {
                    return 1
                } else {
                    return 5
                }
            });
            return {
                title: {
                    text: "能力维度分析",
                    textStyle: {
                        fontSize: 20,
                        color: '#4A90E2',
                        letterSpacing: 2,
                    },
                    padding: [5, 30]
                },
                tooltip: {
                    show: false
                },

                radar: {
                    center: ['50%', '50%'],
                    radius: 200,
                    indicator: [
                        { name: '报表分析与决策', max: 5 },
                        { name: '市场洞察', max: 5 },
                        { name: '目标分级', max: 5 },
                        { name: '公司战略执行力', max: 5 },
                        { name: '资源分配与优化', max: 5 },
                        { name: '销售计划部署', max: 5 },
                        { name: '领导力', max: 5 },
                        { name: '管理能力', max: 5 },
                        { name: '人才培养', max: 5 },

                    ],
                    name: {
                        rich: {
                            a: {
                                fontSize: 14,
                                color: '#485465',
                                lineHeight: 20,
                            },
                            b: {
                                color: '#485465',
                                fontSize: 24,
                                height: 48,
                                width: 48,
                                align: 'center',
                                backgroundColor: 'rgba(185,185,185,0.21)',
                                borderRadius: 38,
                            }
                        },
                        formatter: (a, b) => {
                            let i = this.get('i');
                            i++;
                            this.set('i', i);
                            let word = wordValue;
                            return `{b|${word[i]}}\n{a|${a}}`
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(	112,128,144, 1)',
                                'rgba(	112,128,144, 0.8)', 'rgba(	112,128,144, 0.6)',
                                'rgba(	112,128,144, 0.4)', 'rgba(	112,128,144, 0.05)'
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
                    name: "具体参数",
                    type: 'radar',
                    // tooltip: {
                    //     trigger: 'item'
                    // },
                    symbol: 'none',
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [{
                        value: numberValue,
                        lineStyle: {
                            normal: {
                                color: 'rgba(0,227,194, 0.4)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: 'rgba(0,227,194, 0.6)'
                            }
                        }
                    }]
                }]
            }
        }
    }),

});