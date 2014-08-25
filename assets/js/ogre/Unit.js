if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Ogre unit base
 * 
 * @author Joe Cavanagh
 */
define([], function() {
    return {
        name: '',
        type: '',   //Armor/infantry
        img: '',    //Path to image
        attack: 0,
        defense: 0,
        range: 0,
        move1: 0,
        move2: 0
    };
});
