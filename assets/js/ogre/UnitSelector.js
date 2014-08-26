/* global _, Kinetic */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Unit selector box
 * 
 * @author Joe Cavanagh
 */
define([
    'ogre/UnitManager'
], function(
    UnitManager
) {
    return {
        render: function() {
            //Dimensions and stuff
            var containerWidth = 200,
                containerHeight = 200,
                headerHeight = 25,
                group = new Kinetic.Group();

            //Main container
            var selectorBox = new Kinetic.Rect({
                cornerRadius: 5,
                height: containerHeight,
                width: containerWidth,
                stroke: 'black',
                fill: 'white',
            });

            //Header text
            var headerText = new Kinetic.Text({
                fontSize: 16,
                text: 'UNITS',
                fill: 'black'
            });

            //Header separator
            var headerSep = new Kinetic.Line({
                points: [0, headerHeight, containerWidth, headerHeight],
                stroke: 'black'
            });

            //ASSEMBLE
            headerText.offsetX(-(containerWidth - headerText.width()) / 2);
            headerText.offsetY(-5);

            //Group it
            group.add(selectorBox);
            group.add(headerText);
            group.add(headerSep);

            //Units
            _.each(UnitManager.getUnits(), function(unit, index) {
                var rendered = (new unit()).render();
                rendered.offsetX(-( 5 + (rendered.maxWidth() * (index % 3)) ));
                rendered.offsetY(-(headerHeight + 5 + (rendered.maxHeight() * Math.floor(index / 3))) );
                group.add(rendered);
            });

            return group;
        }
    };
});
