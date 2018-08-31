import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	headOpt(query) {
		return {
			dataType: 'json',
			contentType: 'application/json,charset=utf-8',
			Accept: 'application/json,charset=utf-8',
			data: query
		}
	},
	headers: {
		"Authorization": "bearer 978967bee38f4143e971cca697134919",
	},
	queryObject(store, type, jsonObject) {
		return this.ajax(`/api/v1/phonelogin/0`, 'POST', this.get('headOpt')(jsonObject));
	},
	queryMultipleObject(store, type, jsonObject) {
		return this.ajax(`/api/v1/phonelogin/0`, 'POST', this.get('headOpt')(jsonObject));
	},
    transaction(store, type, jsonObject) {
		return this.ajax(`/api/v1/pushcontact/0`, 'POST', this.get('headOpt')(jsonObject));
	},
});
