/* global Kinetic */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Generates maps
 * 
 * @author Joe Cavanagh
 */
define([
    'ogre/MapTile'
], function(MapTile) {
    var gridHeight = 21,
        gridWidth = 15;

    return {
        /**
         * Returns a map layer
         *
         * @return {Kinetic.Layer} Map layer
         */
        render: function() {
            //Map layer
            var gridLayer = new Kinetic.Layer();

            for (var i = 0; i < gridWidth; i++) {
                for (var j = 0; j < gridHeight; j++) {
                    //First and alternating columns have one less hex
                    if( (i % 2 == 0) && (j == gridHeight - 1) ) {
                        continue;
                    }

                    //Create map tile
                    var hex = new MapTile(i, j);

                    //Add elements to layers
                    gridLayer.add(hex);
                }
            }

            return gridLayer;
        }
    };
});
