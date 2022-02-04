"use strict";

/**
 *  instantie controller
 */

require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: ".env",
});

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::instantie.instantie",
  ({ strapi }) => ({
    async find(ctx) {
      if (
        ctx.originalUrl === "/api/instanties" &&
        ctx.state.isAuthenticated &&
        ctx.request.header.host === process.env.GATSBY_DB_URL
      ) {
        const { user } = ctx.state;

        console.log("Welkom terug in je Afrodiasphere dashboard! [INSTANTIES]");
        const entities = await strapi.db
          .query("api::instantie.instantie")
          .findOne({
            where: {
              persoon: user,
            },
            populate: true,
          });

        return entities;
      } else if (ctx.originalUrl === "/api/instanties?populate=*") {
        console.log(
          "NIET geautoriseerde gebruiker meld zich aan! [INSTANTIES]"
        );
        const entities = await strapi.db
          .query("api::instantie.instantie")
          .findMany({ populate: true });
        return entities;
      } else {
        return (
          console.log("FOUTMELDING! niks te zien hier! [INSTANTIES]"), false
        );
      }
    },
  })
);
