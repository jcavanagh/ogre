if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Ogre main
 * 
 * @author Joe Cavanagh
 */
define([
    'ogre/Map'
], function(Map) {
    return {
        init: function() {
            //Kinetic stage
            var stage = new Kinetic.Stage({
                container: $('#ogre_stage')[0],
                width: 600,
                height: 1000
            });

            //Render a hex grid
            Map.render(stage);
        }
    };
});
