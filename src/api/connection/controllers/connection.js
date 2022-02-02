"use strict";

/**
 *  connection controller
 */

require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: ".env",
});

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::connection.connection",
  ({ strapi }) => ({
    async find(ctx) {
      if (
        ctx.originalUrl === "/api/connections" &&
        ctx.state.isAuthenticated &&
        ctx.request.header.host === process.env.GATSBY_DB_URL
      ) {
        const { user } = ctx.state;

        console.log("Welkom terug in je Afrodiasphere dashboard");
        const entities = await strapi.db
          .query("api::connection.connection")
          .findMany({
            where: {
              links: user,
            },
            populate: true,
          });

        return entities;
      } else if (ctx.originalUrl === "/api/connections?populate=*") {
        console.log("NIET geautoriseerde gebruiker meld zich aan");
        const entities = await strapi.db
          .query("api::connection.connection")
          .findMany({ populate: true });
        return entities;
      } else {
        return console.log("FOUTMELDING!"), false;
      }
    },
  })
);
