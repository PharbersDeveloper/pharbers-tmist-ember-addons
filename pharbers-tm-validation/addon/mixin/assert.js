import Mixin from '@ember/object/mixin';

export default Mixin.create({
    assert(description, condition) {
        if(!condition)
             throw new Error("assertion failed: " + description);
    }
});
