"use strict";

/**
 * instantie router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::instantie.instantie", {
  config: {
    create: {
      policies: [
        // pass a policy implementation directly
        (policyContext, config, { strapi }) => {
          policyContext.request.body.data.persoon = policyContext.state.user.id;
          console.log("dit is aangemaakt");
        },
      ],
    },
  },
});
