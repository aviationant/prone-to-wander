export default ({ env }) => ({
  host: env('HOST', '100.108.159.83'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
