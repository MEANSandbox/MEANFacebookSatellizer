module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'localhost',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '762970cf1a6a8fde2dbde80502d4b1be',// '84e952da26fc9e7a12bbc32523efa8a0',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || 'vdrg4sqxyTPSRdJHKu4UVVdeD',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'cUIobhRgRlXsFyObUMg3tBq56EgGSwabmcavQP4fncABvotRMA'
};
