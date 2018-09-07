import Component from '@ember/component';
import layout from '../templates/components/tm-login';
import styles from '../styles/tm-login';
import { computed } from '@ember/object';

export default Component.extend({
		layout,
		account: '',
		password: '',
		styles,
		setcookies: computed('result', function() {
			return this.get('result').then((result) => {
				let token = result["token"];
				this.cookies.write('token', token);
				let cookiesForToken = this.cookies.read('token');
				if (cookiesForToken != "" && cookiesForToken != null && cookiesForToken != undefined) {
					return { state: "success" };
				}
			});
		}),
		actions: {
			login() {
				let account = this.get('account');
				let password = this.get('password');
				this.sendAction('login', account, password, this);
			}
		}
	})
	.reopenClass({
		positionalParams: ['willto']
	});