module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c36eaf625d67b23090746fb5f049250'),
  },
});
