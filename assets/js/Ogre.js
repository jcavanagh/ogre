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

    //Add a couple helpful things to Kinetic
    function kineticHelpers() {
        Kinetic.Group.prototype.maxWidth = function() {
            return _.reduce(this.getChildren(), function(max, child) {
                var width = child.width();
                return width > max ? width : max;
            }, 0);
        };

        Kinetic.Group.prototype.maxHeight = function() {
            return _.reduce(this.getChildren(), function(max, child) {
                var height = child.height();
                return height > max ? height : max;
            }, 0);
        }
    }

    return {
        init: function() {
            kineticHelpers();

            //Kinetic stage
            var stage = new Kinetic.Stage({
                container: $('#ogre_stage')[0],
                width: 800,
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
                units.x(580);
                units.y(150);

                stage.add(Map.render());
                stage.add(unitLayer);
            });
        }
    };
});
