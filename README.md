# tmple-loader
Webpack loader for [tmple](https://github.com/ruudud/tmple) templates.


## Install and usage
```
> npm install --save tmple
> npm install --save-dev tmple-loader
```

In `webpack.config.js`
```
module.exports = {
  module: {
    loaders: [
      { test   : /\.tjs$/, loader: 'tmple-loader' }
    ]
  }
};
```

Example use of template:
```
var menuTemplate = require('./templates/menu.tjs');
menuTemplate.render({ name: 'foo' });
```


## License
MIT

