'use strict';

/**
 * instantie service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instantie.instantie');
