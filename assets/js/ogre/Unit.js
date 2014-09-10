/* global Kinetic */
if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Ogre unit base
 * 
 * @author Joe Cavanagh
 */
define([], function() {
    //Unit class
    var Unit = function(cfg) {
        //Unit attributes
        this.name = cfg.name || '';
        this.type = cfg.type || '';         //Armor/infantry
        this.img = cfg.img || '';           //Path to image
        this.attack = cfg.attack || 0;
        this.defense = cfg.defense || 0;
        this.range = cfg.range || 0;
        this.move1 = cfg.move1 || 0;
        this.move2 = cfg.move2 || 0;

        //Rendering options
        this.radius = cfg.radius || 30;
    };

    Unit.prototype.render = function() {
        //Build render unit
        var unit = new Kinetic.RegularPolygon({
            sides: 4,
            radius: this.radius,
            stroke: 'black',
            strokeWidth: 1,
            fill: 'white',
            rotationDeg: 45
        });

        var unitLabel = new Kinetic.Text({
            width: this.radius * 2,
            height: this.radius * 2,
            padding: 15,
            fontSize: 10,
            text: this.name,
            fill: 'black',
            wrap: 'char'
        });

        unitLabel.offsetX(unitLabel.width() / 2);
        unitLabel.offsetY(unitLabel.height() / 2);

        var group = new Kinetic.Group({
            draggable: true
        });

        group.add(unit);
        group.add(unitLabel);

        return group;
    };

    return Unit;
});
