/*global forge, module, ok, asyncTest, askQuestion, start */
module("version");

if (forge.is.android()) {
	asyncTest("Version data", 1, function() {
		forge.version.getVersionString(function (version) {
			forge.version.getAPILevel(function (level) {
				forge.version.getDeviceName(function (name) {
					askQuestion("Is this device version: "+version+" API level "+level+" and a: "+name+"?", {
						Yes: function () {
							ok(true, "Success");
							start();
						},
						No: function () {
							ok(false, "User claims failure");
							start();
						}
					});
				});
			});
		});
	});
} else {
	asyncTest("Version data", 1, function() {
		forge.version.getVersionString(function (version) {
			askQuestion("Is this device version: "+version+"?", {
				Yes: function () {
					ok(true, "Success");
					start();
				},
				No: function () {
					ok(false, "User claims failure");
					start();
				}
			});
		});
	});
}