const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para los archivos generados
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      // Reglas de los loaders para transpilar y procesar los archivos
      {
        test: /\.js$/, // Expresión regular para seleccionar los archivos JavaScript
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: 'babel-loader', // Utilizar el loader de Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'mapbox-gl$': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js'),
    },
  },
};
