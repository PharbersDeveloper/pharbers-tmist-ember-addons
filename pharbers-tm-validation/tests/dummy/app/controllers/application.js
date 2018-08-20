import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    validationChars: inject('validation-chars'),
    init() {
        this._super(...arguments);
        let a = "1", b = "0", c = "22.2", d = "3";
        let vc = this.get('validationChars')
        vc.isEmpty(a, b, c, d)
        vc.illegal(a, b, c, d)
    }
})
