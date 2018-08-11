module.exports = {
  apps: [{
    name: 'app-dev',
    script: './src/server/index.js',
    interpreter: 'babel-node',
    interpreter_args: '--presets env,flow',
    ignore_watch: [
      'src/client',
      'public',
    ],
    env: {
      NODE_PATH: 'src/',
      NODE_ENV: 'development',
    },
  }],
};
