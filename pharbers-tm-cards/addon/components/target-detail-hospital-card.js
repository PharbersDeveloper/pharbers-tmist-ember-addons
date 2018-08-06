import Component from '@ember/component';
import layout from '../templates/components/target-detail-hospital-card';
import styles from '../styles/target-detail-hospital-card';

export default Component.extend({
	layout,
	styles,
	tagName: 'div',
	localClassNames: 'basic-info',
	classNames: ['container'],
});