const path = require('path');

module.exports = {
    entry: '/src/bandeira.js',
    output: {
        filename: 'bandeira.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'Bandeira',
            type: 'umd',
            export: 'default'
        },
    },
    mode: 'production',
};
