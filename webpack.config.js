const path = require('path');

module.exports = {
  // Otras configuraciones de webpack...
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /\bmapbox-gl-csp-worker.js\b/i,
        exclude: /node_modules/,
        use: {
          loader: 'worker-loader',
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
          },
          ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
        },
      },
      // Otras reglas de carga de archivos...
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Otras configuraciones de webpack...
};

// const path = require('path');

// module.exports = {
//   entry: './src/index.js', // Archivo de entrada de tu aplicación
//   output: {
//     path: path.resolve(__dirname, 'dist'), // Directorio de salida de los archivos generados
//     filename: 'bundle.js', // Nombre del archivo de salida
//   },
//   module: {
//     rules: [
//       {
//         test: /mapbox-gl.+\.js$/, // Aplicar la transpilación a todos los archivos JavaScript
//         exclude: /node_modules/, // Excluir la carpeta node_modules
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//         // use: {
//         //   loader: 'babel-loader', // Usar babel-loader para transpilar
//         // },
//       },
//     ],
//   },
// };
