const path = require('path');

var entries = {
  main: ['./resources/entries/index.js'],
  // vendors: ['backbone', 'jquery', 'underscore', ],
  // vendors_login: ['jquery', ],
};

var outputDevelopment = {
  path: path.resolve(__dirname, 'public/dist'),
  filename: '[name].js',
};

var outputProduction = {
  path: path.resolve(__dirname, 'public/dist'),
  filename: '[name].min.js',
};

var rules =  [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    include: path.resolve(__dirname, 'resources'),
    use: {
      loader: 'babel-loader'
    },
  }
];

var devServer = {
  host: '0.0.0.0',
  port: 8080,
  contentBase: [
    path.join(__dirname, 'public'),
  ],
  publicPath: path.join(__dirname, 'resources'),
  writeToDisk: true,
  compress: true,
  watchContentBase: true,
  hot: true,
  inline:true,
  allowedHosts: [
    'host.com',
    '*',
  ],
  headers: {
    'Server': 'Ubuntu',
  },
};

var config = {
  entry: entries,
  // plugins: plugins,
  // optimization: optimization,
  module: {
    rules: rules,
  },
  devServer: devServer,
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output = outputDevelopment;
    config.watch = true;
  }
  if (argv.mode === 'production') {
    config.output = outputProduction;
    config.watch = false;
    config.devServer = {};
  }
  return config;
};