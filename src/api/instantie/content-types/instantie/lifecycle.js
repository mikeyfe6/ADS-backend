const slugify = require("slugify");

module.exports = {
  lifecycles: {
    afterCreate: async (data) => {
      console.log(data);
      if (data.profiel) {
        data.slug = slugify(data.profiel);
      }
      console.log("slug before update", data);
    },
    afterUpdate: async (params, data) => {
      if (data.profiel) {
        data.slug = slugify(data.profiel);
        console.log("slug after update", data);
      }
    },
  },
};
