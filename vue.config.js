module.exports = {
  configureWebpack() {
    return {
      resolve: {
        extensions: ['tsx', 'jsx', 'js', 'ts', 'vue']
      }
    };
  }
};
