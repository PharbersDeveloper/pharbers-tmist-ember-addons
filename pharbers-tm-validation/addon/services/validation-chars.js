import Service from '@ember/service';
import Assert from '../mixin/assert';

export default Service.extend(Assert, {
    /**
     * [isEmpty 判断值是否为空]
     * 该方法目前支持，不定参的形式传入的非Object数值
     * 通过断言与try的结合进行判断与提示
     * 后续会更改成Object的判断，与外部定义判断标准
     * @param  {[type]}  parameters [不定参]
     * @return {Boolean}            [成功通过会返回bool值，错误直接给出提示]
     */
    isEmpty(...parameters) {
        try {
            parameters.forEach((elem) => {
                let bool = (elem.toString().replace(/(^\s*)|(\s*$)/g, "").length !== 0)
                this.assert("输入内容为空", bool);
            })
        } catch (e) {
            alert(e.message)
            // window.console.error(e.message);
        }

    },
    /**
     * [illegal 非法字符检测，只能输入正整数或小数]
     * @param  {[type]} parameters [不定参]
     * @return {[type]}            [成功通过会返回bool值，错误直接给出提示]
     */
    illegal(...parameters) {
        try {
            parameters.forEach((elem) => {
                let patten = /^(0|[1-9][0-9]*)+(\.?\d*)$/;
                let bool = patten.test(elem);
                this.assert("输入有非法字符", bool);
            });
        } catch (e) {
            alert(e.message)
            // window.console.error(e.message);
        }

    }
});
