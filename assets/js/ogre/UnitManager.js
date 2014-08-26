if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * Basically a list of units
 * 
 * @class
 * @author Joe Cavanagh
 */
define([
    'ogre/units/HeavyTank'
], function(HeavyTank) {
    var units = [
        //Armor
        HeavyTank,
        HeavyTank,
        HeavyTank,
        HeavyTank,

        //Infantry
    ];

    return {
        getUnits: function() {
            return units;
        },

        getArmorUnits: function() {
            return _.filter(units, function(unit) {
                return unit && unit.type == 'armor';
            });
        },

        getInfantryUnits: function() {
            return _.filter(units, function(unit) {
                return unit && unit.type == 'infantry';
            });
        }
    }
});
