const lookupJson = require('../data/region_lookup.json');
const salesJson = require('../data/restaurant_sales_data.json');

let restaurantDataService = {

    getRegionLookup: function() {
        return lookupJson.regions;
    },

    getSales: function(name) {
        return salesJson[name];
    }
};

module.exports = restaurantDataService;