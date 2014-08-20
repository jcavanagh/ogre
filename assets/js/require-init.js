require.config({
    baseUrl: '/js',

    paths: {
        'kineticjs': 'bower_components/kineticjs/kinetic.min',
        'lodash': 'bower_components/lodash/dist/lodash'
    },

    shim: {
        'kineticjs': {
            exports: 'Kinetic'
        },
        'lodash': {
            exports: '_'
        }
    }
});

//FIRE IT UP
require([
    'kineticjs',
    'lodash'
], function(kineticjs, lodash) {
    //TODO: Real app stuff
});