const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Directorio de salida de los archivos generados
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplicar la transpilación a todos los archivos JavaScript
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: 'babel-loader', // Usar babel-loader para transpilar
        },
      },
    ],
  },
};
