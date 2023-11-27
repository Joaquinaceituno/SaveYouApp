module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }]
    ]
=======
    plugins:['react-native-reanimated/plugin'] 
>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
  };
};
