const graphql = require('graphql');
const restaurantDataService = require('./restaurant_data_service');
const RestaurantSales = require('./restaurant_sales_type');

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            restaurant: {
                type: RestaurantSales,
                args: {
                    name: { type: graphql.GraphQLString },
                },
                resolve: (_, {name}) => restaurantDataService.getSales(name),
            },
        },
    }),
});

module.exports = schema;