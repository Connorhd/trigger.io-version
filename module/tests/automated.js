/* global module, asyncTest, forge, ok, start*/
module("version");

asyncTest("Get version string", 1, function() {
	forge.version.getVersionString(function () {
		ok(true, "Got a version string");
		start();
	}, function () {
		ok(false, "API Error");
		start();
	});
});

if (forge.is.android()) {
	asyncTest("Get API level", 1, function() {
		forge.version.getAPILevel(function () {
			ok(true, "Got a API level");
			start();
		}, function () {
			ok(false, "API Error");
			start();
		});
	});

	asyncTest("Get device name", 1, function() {
		forge.version.getDeviceName(function () {
			ok(true, "Got a device name");
			start();
		}, function () {
			ok(false, "API Error");
			start();
		});
	});
}