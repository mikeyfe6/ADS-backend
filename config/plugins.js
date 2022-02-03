module.exports = ({ env }) => ({
  // ...USER PERMS PLUGIN
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
    },
  },
  // ...UPLOAD PLUGIN
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      // actionOptions: {
      //   upload: {},
      //   delete: {},
      // },
    },
  },
  // ...SENDGRID PLUGIN
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "develop@menefex.nl",
      defaultReplyTo: "develop@menefex.nl",
    },
  },
  // ...GRAPHQL PLUGIN
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
        introspection: true,
      },
    },
  },
});
