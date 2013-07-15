/* global forge */
forge.version = {
	getVersionString: function(success, error) {
		forge.internal.call("version.getVersionString", {}, success, error);
	},
	getAPILevel: function(success, error) {
		forge.internal.call("version.getAPILevel", {}, success, error);
	},
	getDeviceName: function(success, error) {
		forge.internal.call("version.getDeviceName", {}, success, error);
	}
};