module.exports = {
  apps: [{
    name: 'app',
    script: './dist/server/index.js',
    env: {
      NODE_PATH: 'dist/',
      NODE_ENV: 'production',
    },
  }],
};
