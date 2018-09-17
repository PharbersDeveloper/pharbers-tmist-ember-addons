import Component from '@ember/component';
import layout from '../templates/components/capability-line';
import styles from '../styles/capability-line';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'capability-line',
    init() {
        this._super(...arguments);
        this.data = [
            { title: "發展潛力", desc: ["在現今醫藥銷售領域，由於人員快速流動，許多公司對於提升到崗率、與降低團隊人員流失更加重視，這也考驗著經理的管理能力，是否能為企業搭建穩定的銷售隊伍，在這點上您需要有更多的重視。d"] },
            { title: "潛在風險", desc: ["在現今醫藥銷售領域，由於人員快速流動，許多公司對於提升到崗率、與降低團隊人員流失更加重視，這也考驗著經理的管理能力，是否能為企業搭建穩定的銷售隊伍，在這點上您需要有更多的重視。", "在現今醫藥銷售領域，由於人員快速流動，許多公司對於提升到崗率、與降低團隊人員流失更加重視，這也考驗著經理的管理能力，是否能為企業搭建穩定的銷售隊伍，在這點上您需要有更多的重視。"] },
            { title: "提升方向", desc: ["在現今醫藥銷售領域，由於人員快速流動，許多公司對於提升到崗率、與降低團隊人員流失更加重視，這也考驗著經理的管理能力，是否能為企業搭建穩定的銷售隊伍，在這點上您需要有更多的重視。", "在現今醫藥銷售領域，由於人員快速流動，許多公司對於提升到崗率、與降低團隊人員流失更加重視，這也考驗著經理的管理能力，是否能為企業搭建穩定的銷售隊伍，在這點上您需要有更多的重視。", '在現今醫藥銷售領域，由於人員快速流動，許多公司對於提升到崗率、與降低團隊人員流失更加重視，這也考驗著經理的管理能力，是否能為企業搭建穩定的銷售隊伍，在這點上您需要有更多的重視。'] },

        ];
        this.options = {
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
                            shadowBlur: 5,
                            shadowColor: '#666',
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
                data: [
                    [0, 'D'],
                    [1, 'A'],
                    [2, 'C'],
                    [3, 'C'],
                    [4, 'A'],
                    [5, 'C'],
                    [6, 'D']
                ],
                // data: [1,2,3,4,5,6,7],
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
    },
    optionResult: computed('data', function() {
        // let data = this.get('data');

        return {}
    }),

});