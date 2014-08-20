if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Generates maps
 * 
 * @author Joe Cavanagh
 */
define([], function() {
    return {
        render: function(stage) {
            if(!stage) {
                console.error('Cannot render Map without a Stage');
            }

            //Helpers
            function pad(number, pad) {
                var N = Math.pow(10, pad);
                return number < N ? ("" + (N + number)).slice(1) : "" + number
            }

            var gridHeight = 21,
                gridWidth = 15,
                hexRadius = 24,
                hexHeight = (hexRadius * Math.sqrt(3)),
                hexSide = hexRadius * 3 / 2,
                gridLayer = new Kinetic.Layer();

            for (var i = 0; i < gridWidth; i++) {
                for (var j = 0; j < gridHeight; j++) {
                    //Top row is a half row, ignore alternating hexes
                    if( j == 0 && (i % 2 == 0) ) {
                        continue;
                    }

                    //Make a hex!
                    var mX = hexRadius + (i * hexSide);
                    var mY = hexRadius + (hexHeight * (2 * j + (i % 2)) / 2);

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
                        //There's an odd Kinetic bug where 1 pixel around the text box
                        //will flicker the mouse enter/leave events, so ignore events
                        listening: false,
                        text: pad(i, 2) + pad(j, 2),
                        fill: 'black'
                    });

                    //Center align text
                    hexLabel.offsetX(hexLabel.width() / 2);
                    hexLabel.offsetY(hexLabel.height() / 2);

                    var group = new Kinetic.Group();
                    group.add(hexagon);
                    group.add(hexLabel);

                    //Events
                    group.on('mouseenter', function() {
                        this.get('RegularPolygon').fill('red');
                        this.draw();
                    });

                    group.on('mouseleave', function() {
                        this.get('RegularPolygon').fill('white');
                        this.draw();
                    });

                    //Add elements to layers
                    gridLayer.add(group);
                }
            }

            stage.add(gridLayer);
        }
    };
});
