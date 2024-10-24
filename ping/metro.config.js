/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    transformer: {
        // Enables support for assets such as images or fonts
        assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
        // Add additional asset types if needed (e.g. svg)
        assetExts: ['ttf', 'png', 'jpg', 'svg'],
    },
};