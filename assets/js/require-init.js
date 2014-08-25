require.config({
    baseUrl: '/js',

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'kineticjs': 'bower_components/kineticjs/kinetic',
        'lodash': 'bower_components/lodash/dist/lodash.min',
        'underscore.string': 'bower_components/underscore.string/dist/underscore.string.min'
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
    'underscore.string',
    'Ogre'
], function(jquery, kineticjs, lodash, underscoreStr, Ogre) {
    //Get understore.string in there
    _.mixin(underscoreStr.exports());

    //Ogre!
    Ogre.init();
});