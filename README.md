# TV Shows
[![Tvmaze](http://static.tvmaze.com/images/api/tvm_api.png)](http://www.tvmaze.com/api "Tvmaze")
This application shows popular Tv Shows from the Tvmaze API. Details fo a Tv shows like episodes, cast, crew.
Also, categorize in genres and functionality to search. And it is mobile responsive



##### :dart: Prerequisites
-   `Node-LTS` v12.4.0
-   `Yarn` 1.17.0
-   `@vue/cli` 4.4.1

## Project dependencies of Unit test and UI component framework (optional)
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
yarn start
```

### :rocket: Compiles and minifies for production
```
yarn build
```

### :shirt: Lints files
```
yarn lint
```

### :rotating_light: Unit test 
```
yarn test
```

###  Folder Structure
```
.
├── README.md
├── babel.config.js
├── jest.config.js
├── package.json
├── public
│   └── index.html
├── src // All components,containers, store, router
│   ├── App.vue //Root component
│   ├── assets
│   ├── components
│   │   ├── cast.comp.vue
│   │   ├── common // contains common components used in other components and containers
│   │   ├── crew.comp.vue
│   │   ├── episodes.comp.vue
│   │   ├── homeSlider.comp.vue
│   │   └── horizontal.comp.vue
│   ├── containers // Pages to bind components
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
│   │   ├── modules //store's module
│   │   └── mutation-types.js
│   └── styles // Quasar CSS and variables
│       ├── quasar.styl
│       └── quasar.variables.styl
├── tests
│   └── unit
│       ├── app.spec.js
│       ├── components
│       └── containers
├── vue.config.js
└── yarn.lock
```