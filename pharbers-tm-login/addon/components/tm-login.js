import Component from '@ember/component';
import { inject } from '@ember/service';
import layout from '../templates/components/tm-login';
import styles from '../styles/tm-login';
import rsvp from 'rsvp';

export default Component.extend({
		ajax: inject(),
		layout,
		account: '',
		password: '',
		getAjaxOpt(data) {
			return {
				method: 'POST',
				dataType: "json",
				cache: false,
				data: JSON.stringify(data),
				contentType: "application/json",
				Accpt: "application/json"
			}
		},
		styles,
		actions: {
			login() {
				let condition = {
					"version": { "major": 1, "minor": 0 },
					"data": {
						"type": "user",
						"condition": {
							"email": this.get('account'),
							"password": this.get('password')
						}
					}
				};

				new rsvp.Promise((resolve, reject) => {
					return this.get('ajax')
						.request(this.get('interface'), this.getAjaxOpt(condition))
						.then((response) => {
								if (response.status === "ok") {
									this.sendAction('response', response);
								} else {
									alert('帐号或密码错误。');
								}
								return resolve({ result: response });
							},
							() => { return reject("Access Error"); }
						);
				});
			}
		}
	})
	.reopenClass({
		positionalParams: ['interface']
	});