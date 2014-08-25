/* global _, Kinetic */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Ogre map tile
 * 
 * @author Joe Cavanagh
 */
define([], function() {
    var hexRadius = 24,
        hexHeight = (hexRadius * Math.sqrt(3)),
        hexSide = hexRadius * 3 / 2;

    //Helpers
    function fillHex() {
        this.get('RegularPolygon').fill('red');
        this.draw();
    }

    function clearHex() {
        this.get('RegularPolygon').fill('white');
        this.draw();
    }

    //Actual class
    var MapTile = function(x, y) {
        var xy = this.getXYFromCoords(x, y);
        var mX = xy[0];
        var mY = xy[1];

        var hexagon = new Kinetic.RegularPolygon({
            x: mX,
            y: mY,
            sides: 6,
            radius: hexRadius,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 1,
            rotationDeg: 90
        });

        var hexLabel = new Kinetic.Text({
            x: mX,
            y: mY,
            fontSize: 10,
            //There's an odd Kinetic bug (?) where 1 pixel around the text box
            //will flicker the mouse enter/leave events. So, ignore events here
            listening: false,
            text: _.pad(x + 1, 2, '0') + _.pad(y + 1, 2, '0'),
            fill: 'black'
        });

        //Center align text
        hexLabel.offsetX(hexLabel.width() / 2);
        hexLabel.offsetY(hexLabel.height() / 2);

        var group = new Kinetic.Group();
        group.add(hexagon);
        group.add(hexLabel);

        //Events
        group.on('mouseenter', fillHex);
        group.on('mouseleave', clearHex);

        return group;
    };

    MapTile.prototype.getXYFromCoords = function(a, b) {
        //Offset first and alternating columns one hex down
        if(a % 2 == 0) {
            b++;
        }

        //Calculate x/y
        var x = hexRadius + (a * hexSide),
            y = hexRadius + (hexHeight * (2 * b + (a % 2)) / 2);

        return [x, y];
    };

    return MapTile;
});
