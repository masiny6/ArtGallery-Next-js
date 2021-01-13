module.exports = {
  webpack: (config, options) => {
    const nextCssLoaders = config.module.rules.find((rule) => typeof rule.oneOf === 'object');

    nextCssLoaders.oneOf.forEach((loader) => {
      console.log(loader)
        if (loader.sideEffects && loader.issuer && loader.issuer.and && loader.issuer.and.filter(word => word.endsWith('_app.js')).length) {
            delete loader.issuer;
        }
    });
    return config
  }
}