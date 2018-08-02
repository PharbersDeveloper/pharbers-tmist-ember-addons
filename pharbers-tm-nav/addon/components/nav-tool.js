import Component from '@ember/component';
import layout from '../templates/components/nav-tool';
import styles from '../styles/nav-tool';

export default Component.extend({
  layout,
  styles,
  tagName: 'div',
  localClassNames: 'menu-bar',
});