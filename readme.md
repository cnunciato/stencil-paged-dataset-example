# Stencil Paged Dataset Example

This is an example of one way to build component-based pagination with a remote data
source in [Stencil](https://stenciljs.com/). It consists of two components:

* `paginator`, which renders paging controls and dispatches selection events, and
* `paged-dataset`, which intiates calls to remote data source and displays paged results.

You can view a running example at [http://stencil-paged-dataset.surge.sh/](http://stencil-paged-dataset.surge.sh/).

## Getting Started

To start this project, clone into a new directory:

```bash
git clone https://github.com/cnunciato/stencil-paged-dataset-example.git
cd stencil-paged-dataset-example
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during development, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
