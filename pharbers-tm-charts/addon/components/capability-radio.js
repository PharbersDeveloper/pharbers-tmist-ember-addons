import Component from '@ember/component';
import layout from '../templates/components/capability-radio';
import styles from '../styles/capability-radio';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    styles,
    localClassNames: 'capability-radar',
    init() {
        this._super(...arguments);
        this.value = [1,3,4,3,1,2,2,3,4];
        this.i = -1;
        this.options = {
            title: {
                // text: "能力值展示雷达图",
            },
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //     data: ['能力分配', ]
            // },
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
                    formatter: (a,b)=> {
                        let i = this.get('i');
                        i++;
                        this.set('i',i);
                        let arr = this.get('value');
                        let word = arr.map((item)=> {
                            if(item==1) {
                                return 'A'
                            } else if(item == 2) {
                                return 'B'
                            } else if(item==3) {
                                return 'C'
                            } else if(item == 4) {
                                return 'D'
                            } else {
                                return 'S'
                            }
                        })
                        return `{b|${word[i]}}\n{a|${a}}`
                    }
                    // textStyle: {
                    //     color: '#485465 '
                    // }
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
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                    {
                        value: this.get('value'),
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
                    }
                ]
            }]
        }
    },
    optionResult: computed('data', function() {
        // let data = this.get('data');

        return {
            title: {
                // text: "能力值展示雷达图",
            },
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //     data: ['能力分配', ]
            // },
            radar: {
                shape: 'circle',
                center: ['50%', '50%'],
                radius: 150,
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
                name: "能力",
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                    {
                        value: [1,1,1,1,1,1,1,1,1]
                    }
                ]
            }]
        }
    }),

});