require.config({
    baseUrl: '/js',

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'kineticjs': 'bower_components/kineticjs/kinetic',
        'lodash': 'bower_components/lodash/dist/lodash.min'
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
    'lodash'
], function(kineticjs, lodash) {
    //Helpers
    function pad(number, pad) {
        var N = Math.pow(10, pad);
        return number < N ? ("" + (N + number)).slice(1) : "" + number
    }

    //Kinetic stage
    var stage = new Kinetic.Stage({
        container: $('#ogre_stage')[0],
        width: 600,
        height: 1000
    });

    //Render a hex grid
    var gridHeight = 21,
        gridWidth = 15,
        hexRadius = 24,
        hexHeight = (hexRadius * Math.sqrt(3)),
        hexSide = hexRadius * 3 / 2,
        gridLayer = new Kinetic.Layer(),
        labelLayer = new Kinetic.Layer();

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
                text: pad(i, 2) + pad(j, 2),
                fill: 'black'
            });

            //Center align text
            hexLabel.offsetX(hexLabel.width() / 2);
            hexLabel.offsetY(hexLabel.height() / 2);

            //Add elements to layers
            labelLayer.add(hexLabel);
            gridLayer.add(hexagon);
        }
    }

    stage.add(gridLayer);
    stage.add(labelLayer);
});