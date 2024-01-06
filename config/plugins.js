module.exports = ({ env }) => ({
  // ...USER PERMS PLUGIN
  "users-permissions": {
    config: {
      config: {
        jwtSecret: env("JWT_SECRET"),
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
    },
  },
  // ...SENDGRID PLUGIN
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "afrodiasphere@menefex.nl",
        defaultReplyTo: "afrodiasphere@menefex.nl",
        testAddress: "develop@menefex.nl",
      },
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
  // ...SLUGIFY PLUGIN
  // slugify: {
  //   enabled: true,
  //   config: {
  //     contentTypes: {
  //       instantie: {
  //         field: "slug",
  //         references: "profiel",
  //       },
  //     },
  //   },
  // },
  // TODO fixen als er een update komt...
});
