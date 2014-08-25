if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Ogre main
 * 
 * @author Joe Cavanagh
 */
define([
    'require'
], function(require) {
    //List of all units
    var units = [];

    return {
        init: function() {
            //Kinetic stage
            var stage = new Kinetic.Stage({
                container: $('#ogre_stage')[0],
                width: 600,
                height: 1000
            });

            require([
                'ogre/Map',
                'ogre/UnitSelector'
            ], function(Map, UnitSelector) {
                //Render the initial things
                var unitLayer = new Kinetic.Layer(),
                    units = UnitSelector.render();

                unitLayer.add(units);
                units.x(500);
                units.y(100);

                stage.add(Map.render());
                stage.add(unitLayer);
            });
        },

        //Unit registration
        registerUnit: function(unit) {
            if(unit) {
                units.push(unit);
            }
        },

        getUnits: function() {
            return units;
        }
    };
});
