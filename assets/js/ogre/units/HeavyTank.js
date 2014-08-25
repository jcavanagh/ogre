if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Ogre heavy tank
 * 
 * @author Joe Cavanagh
 */
define([
    'Ogre',
    'ogre/Unit'
], function(Ogre, Unit) {
    var HeavyTank = function() {
        return new Unit({
            name: 'Heavy Tank',
            type: 'armor',
            attack: 4,
            defense: 3,
            range: 2,
            move1: 3,
            move2: 0,
        });
    };

    Ogre.registerUnit(HeavyTank);

    return HeavyTank;
});
