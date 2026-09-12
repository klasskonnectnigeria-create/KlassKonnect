// Railway doesn't set NODE_ENV, so that alone can't be used to gate dev-only
// endpoints in this project - it would always look like development, even in
// production. Railway does auto-inject RAILWAY_ENVIRONMENT_NAME, which is
// reliably "production" for the live deployment, so check that too. Locally
// (no Railway env vars at all), this is always false, which is what we want -
// dev-only endpoints stay available for local development and testing.
export const isProduction = () =>
  process.env.NODE_ENV === 'production' ||
  process.env.RAILWAY_ENVIRONMENT_NAME === 'production';
