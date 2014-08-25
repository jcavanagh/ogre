if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Ogre GEV
 * 
 * @author Joe Cavanagh
 */
define(['ogre/Unit'], function(Unit) {
    return _.extend(Unit, {
        name: 'GEV',
        type: 'armor',
        attack: 2,
        defense: 2,
        range: 2,
        move1: 4,
        move2: 3
    });
});
