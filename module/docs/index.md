``version``: Access device version information
==============================================

This module allows you to access version information for the users device.

##API

!method: forge.version.getVersionString(success, error)
!platforms: iOS, Android
!param: success `function(version)` called with the devices version
!param: error `function(content)`
!description: Access the devices version

!method: forge.version.getAPILevel(success, error)
!platforms: Android
!param: success `function(level)` called with the devices API level
!param: error `function(content)`
!description: Access the Android API level of the device

!method: forge.version.getDeviceName(success, error)
!platforms: Android
!param: success `function(name)` called with the devices name
!param: error `function(content)`
!description: Access the Android device name, i.e. "Nexus 7"
