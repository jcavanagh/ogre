/* global Kinetic */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Unit selector box
 * 
 * @author Joe Cavanagh
 */
define([
    'Ogre'
], function(
    Ogre
) {
    return {
        render: function() {
            //Main container
            var selector = new Kinetic.Rect({
                cornerRadius: 5,
                height: 200,
                width: 100,
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
            var headerSep = new Kinetic.Line();

            //Units
            _.each(Ogre.getUnits(), function(unit) {

            });

            //ASSEMBLE
            headerSep.offsetY(-20);

            //Group it
            var group = new Kinetic.Group();
            group.add(selector);
            // group.add(headerText);
            // group.add(headerSep);

            return group;
        }
    }
});
