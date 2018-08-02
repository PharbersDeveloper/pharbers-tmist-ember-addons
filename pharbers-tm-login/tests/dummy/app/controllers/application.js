import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		response(obj) {
			window.console.info(obj)
		}
	}
});
