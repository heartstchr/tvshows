# TV Shows
[![Tvmaze](http://static.tvmaze.com/images/api/tvm_api.png)](http://www.tvmaze.com/api "Tvmaze")

##### :dart: Prerequisites
-   `Node-LTS` v12.4.0
-   `Yarn` 1.17.0
-   `@vue/cli` 4.4.1

## Setup Unit test and UI component framework
```
vue add unit-jest
vue add quasar
```

## :wrench: Project setup
```
yarn install
```

### :zap: Compiles and hot-reloads for development
```
yarn serve
```

### :rocket: Compiles and minifies for production
```
yarn build
```

### :shirt: Lints and fixes files
```
yarn lint
```

### :rotating_light: Unit test 
```
yarn test
```


.
├── README.md
├── babel.config.js
├── jest.config.js
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   ├── cast.comp.vue
│   │   ├── common
│   │   ├── crew.comp.vue
│   │   ├── episodes.comp.vue
│   │   ├── homeSlider.comp.vue
│   │   └── horizontal.comp.vue
│   ├── containers
│   │   ├── Error404.vue
│   │   ├── Genres.vue
│   │   ├── Home.vue
│   │   ├── Search.vue
│   │   ├── SingleGenres.vue
│   │   └── SingleTvshows.vue
│   ├── main.js
│   ├── quasar.js
│   ├── router.js
│   ├── store
│   │   ├── index.js
│   │   ├── modules
│   │   └── mutation-types.js
│   └── styles
│       ├── quasar.styl
│       └── quasar.variables.styl
├── tests
│   └── unit
│       ├── app.spec.js
│       ├── components
│       └── containers
├── vue.config.js
└── yarn.lock
