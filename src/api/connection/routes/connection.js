"use strict";

/**
 * connection router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::connection.connection", {
  config: {
    create: {
      policies: [
        // pass a policy implementation directly
        (policyContext, config, { strapi }) => {
          policyContext.request.body.data.links = policyContext.state.user.id;
        },
      ],
    },
  },
});
