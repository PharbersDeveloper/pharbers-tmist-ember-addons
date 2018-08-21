'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
    let app = new EmberAddon(defaults, {
        'ember-bootstrap': {
            'bootstrapVersion': 3,
            'importBootstrapFont': true,
            'importBootstrapCSS': true
        },
        sassOptions: {
            includePaths: [
                'node_modules/bootstrap-sass/assets/stylesheets'
            ]
        }
    });

    return app.toTree();
};