import DS from 'ember-data';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
	cookies: inject(),
	token: computed(function() {
		return "bearer " + this.get('cookies').read('token');
	}),
	headOpt(query) {
		return {
			dataType: 'json',
			contentType: 'application/json,charset=utf-8',
			Accept: 'application/json,charset=utf-8',
			data: query
		}
	},
	headers: {},
	queryObject(store, type, jsonObject) {
		this.set('headers.Authorization', "bearer " + this.get('cookies').read('token'))
		return this.ajax(`/api/v1/phonelogin/0`, 'POST', this.get('headOpt')(jsonObject));
	},
	queryMultipleObject(store, type, jsonObject) {
		this.set('headers.Authorization', "bearer " + this.get('cookies').read('token'))
		return this.ajax(`/api/v1/phonelogin/0`, 'POST', this.get('headOpt')(jsonObject));
	},
    transaction(store, type, jsonObject) {
		this.set('headers.Authorization', "bearer " + this.get('cookies').read('token'))
		return this.ajax(`/api/v1/pushcontact/0`, 'POST', this.get('headOpt')(jsonObject));
	},
});
