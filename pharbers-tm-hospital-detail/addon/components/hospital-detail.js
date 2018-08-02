import Component from '@ember/component';
import layout from '../templates/components/hospital-detail';

export default Component.extend({
    layout
}).reopenClass({
    positionalParams: ['hospital']
});