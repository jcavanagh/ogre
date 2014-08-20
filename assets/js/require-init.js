require.config({
    baseUrl: '/js',

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'kineticjs': 'bower_components/kineticjs/kinetic',
        'lodash': 'bower_components/lodash/dist/lodash.min'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
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
    'jquery',
    'kineticjs',
    'lodash',
    'Ogre'
], function(jquery, kineticjs, lodash, Ogre) {
    Ogre.init();
});