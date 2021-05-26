

const contactResolvers = require('./contactResolvers');

const { userResolvers } = require('../libs/auth');



/*##########################################################
 * resolvers that are created should be added to this array
 ###########################################################*/
module.exports = [
    userResolvers,
    contactResolvers,
];