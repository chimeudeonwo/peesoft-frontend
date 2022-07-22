export const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.tsx',
        path: path.resolve(__dirname, 'dist'),
    },
};