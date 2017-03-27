# AngularJS Project

Generated using yeoman

Install node.js, install npm, install yo, install bower, install grunt 

install npm modules 

```
npm install
```
install bower components 

```
bower install
```

run grunt 

```
grunt serve
```

package

```
grunt build
```

# problem

> No "cssmin" targets found.  
> Warning: Task "cssmin" failed. Use --force to continue.

solution 1
comment out cssmin from build target

solution 2
must tell grunt to build these things also from index.html

```html
    <!-- build:css(.) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" />
    <!-- endbower -->
    <!-- endbuild -->
```
move img to images
move js to scripts
move css to styles
move partials to views

# yeoman commands 

[https://github.com/yeoman/generator-angular](https://github.com/yeoman/generator-angular)

* angular:controller
* angular:directive
* angular:filter
* angular:route
* angular:service
* angular:provider
* angular:factory
* angular:value
* angular:constant
* angular:decorator
* angular:view

## create controller 

```
yo angular:controller ContactCtrl
```

## create view

```
yo angular:view contact
```

## create route  

Route  
Generates a controller and view, and configures a route in app/scripts/app.js connecting them.  

```
yo angular:route contact
```
move route to script/Config/Routes.js.  
app name has changed modify Controller/contact.js module to AngExample, if $scope is needed remember to inject it function($scope).

# IDE

Use netbeans it has best support for javascript projects.  
For windows download html version (netbeans-8.2-html-windows-x64.exe).

# For manual

Project cloned from [ang-starter](https://github.com/mriverodorta/ang-starter/)

Install node.js, install npm

Install bower

```javascript
bower install
```

Serve the app directory for production

Sample available at http://xiemingzhi.github.io/angularjswebapp/



