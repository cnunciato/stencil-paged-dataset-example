exports.config = {
  bundles: [
    {
      components: [
        'cdn-home',
        'cdn-paged-dataset',
        'cdn-paginator'
      ]
    }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
