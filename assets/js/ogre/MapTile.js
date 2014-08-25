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

    function getPixelCoords(a, b) {
        //Offset first and alternating columns one hex down
        if(a % 2 === 0) {
            b++;
        }

        //Calculate pixel x/y
        var x = hexRadius + (a * hexSide),
            y = hexRadius + (hexHeight * (2 * b + (a % 2)) / 2);

        return [x, y];
    }

    //Actual class
    var MapTile = function(x, y) {
        //Store grid coords
        this.x = x;
        this.y = y;

        //Get pixel coords
        var xy = getPixelCoords(x, y);
        this.pX = xy[0];
        this.pY = xy[1];
    };

    MapTile.prototype.render = function() {
        //Create tile
        var hexagon = new Kinetic.RegularPolygon({
            x: this.pX,
            y: this.pY,
            sides: 6,
            radius: hexRadius,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 1,
            rotationDeg: 90
        });

        var hexLabel = new Kinetic.Text({
            x: this.pX,
            y: this.pY,
            fontSize: 10,
            //There's an odd Kinetic bug (?) where 1 pixel around the text box
            //will flicker the mouse enter/leave events. So, ignore events here
            listening: false,
            text: _.pad(this.x + 1, 2, '0') + _.pad(this.y + 1, 2, '0'),
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

    MapTile.prototype.addUnit = function(unit) {

    };

    return MapTile;
});
