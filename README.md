# winston-viewer-static

A winston log viewer based on Vue.js. This is the frontend part of winston-viewer.

## Usage

We suggest you to use [winston-viewer](https://github.com/ZaneXie/winston-viewer) which contains the backend part and can be used as middleware for koa.

If you want to use this package independent, you can

> Install 
``` bash
npm install winston-viewer-static
```

> Serve
``` javascript
var winston_viewer_static = require('winston-viewer-static');

// winston_viewer_static.static will contain the absolute path to the frontend files directory. It can be served
 as static files by koa-static or express.static
```
## Build Setup

If you want to build this project by your self, you can

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

This is a Typescript enabled vue project with webpack. Template and style are loaded by vue-loader, 
typescript files are loaded by ts-loader. If you are not familiar with typescript, you can remove ts file, and write 
pure javascript in <script> tag inside .vue files.
