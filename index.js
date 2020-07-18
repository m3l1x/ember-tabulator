'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);
    // app.import('node_modules/tabulator-tables/dist/css/tabulator.css');
    app.import('node_modules/tabulator-tables/dist/css/materialize/tabulator_materialize.css');
  }
};
