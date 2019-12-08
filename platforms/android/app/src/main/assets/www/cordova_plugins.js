cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-velda-devicefeedback.DeviceFeedback",
      "file": "plugins/cordova-plugin-velda-devicefeedback/DeviceFeedback.js",
      "pluginId": "cordova-plugin-velda-devicefeedback",
      "clobbers": [
        "window.plugins.deviceFeedback"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-velda-devicefeedback": "0.0.2"
  };
});