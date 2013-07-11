# trigger.io-version

A [native plugin for Trigger.io](https://trigger.io/docs/current/api/native_plugins/index.html) to get information on the device / OS version.

## Usage

#### `getVersionString`: Get the OS version (e.g. '4.2.2') as a string. (`iOS`, `Android`)
```javascript
window.forge.internal.call('version.getVersionString', {}, 
function(result) {
   console.log('Device OS: ' + result);
},
function(error) {
   // handle errors
});
```
===

#### `getDeviceName`: Get the model name (e.g. 'Nexus 7') as a string. (`Android`)
```javascript
window.forge.internal.call('version.getDeviceName', {}, 
function(result) {
   console.log('Device name: ' + result);
},
function(error) {
   // handle errors
});
```
===

#### `getAPILevel`: Get the [Android API level](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels) (e.g. 15) as an integer. (`Android`)
```javascript
window.forge.internal.call('version.getAPILevel', {}, 
function(result) {
   console.log('API level: ' + result);
},
function(error) {
   // handle errors
});
```

## Compatibility

Each method is available to all versions of the supported OS (see above) that can be used with Trigger.io.

## License (BSD 2-part)

Copyright (c) 2013, Hojoki GmbH. 
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer. 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies, 
either expressed or implied, of the FreeBSD Project.
