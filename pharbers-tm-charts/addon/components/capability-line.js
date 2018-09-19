import Component from '@ember/component';
import layout from '../templates/components/capability-line';
import styles from '../styles/capability-line';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'capability-line',
    init() {
        this._super(...arguments);
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
            let value = wordValue.map((item, index) => {
                return [index, item]
            });
            return {
                title: {
                    text: "态势与发展分析",
                    textStyle: {
                        fontSize: 20,
                        color: '#4A90E2',
                        letterSpacing: 2,
                    },
                    top: -5,
                    // padding: [5, 30]
                },
                xAxis: {
                    type: 'category',
                    position: 'top',
                    data: ['报表分析与决策', '公司战略执行力', '市场洞察力', '目标分级', '销售计划部署', '资源分配与优化', '领导力'],
                    show: true,
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        interval: false,
                        margin: 0,
                        textStyle: {
                            color: '',
                            fontSize: '16',
                        },
                        axisLine: {
                            show: false
                        },
                        formatter: function(value) {
                            return `{shadow|${value}}`;
                        },
                        rich: {
                            shadow: {
                                backgroundColor: '#8F9CC3',
                                fontSize: 14,
                                height: 30,
                                width: 120,
                                padding: 5,
                                color: '#fff',
                                // shadowBlur: 5,
                                // shadowColor: '#666',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0
                            },
                        },
                    },
                    splitLine: {
                        show: true,
                    }
                },
                yAxis: {
                    data: ['D', 'C', 'B', 'A', 'S'],
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                    type: 'category',
                    splitLine: {
                        show: true,
                    }
                },
                series: [{
                    data: value,
                    color: ['#A8C1FD'],
                    width: 3,
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 4, //折线宽度
                            }
                        }
                    },
                    symbolSize: 15,
                }]
            }
        }
    }),

});