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
      sizeLimit: 250 * 1024 * 1024,
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
  // ...SLUGIFY PLUGIN
  slugify: {
    enabled: false,
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
