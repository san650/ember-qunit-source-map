/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-qunit-source-map',

  options: {
    nodeAssets: {
      "source-map-support": function() {
        return {
          enabled: this.app.env === 'test',
          import: ['browser-source-map-support.js']
        };
      }
    }
  },
  contentFor: function(type, config) {
    if (type === 'test-body-footer') {
      return '<script>require("browser-source-map-support").install();</script>';
    }
  }
};
