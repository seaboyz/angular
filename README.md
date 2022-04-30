# Angular

This the Angular learning notes, and a ecommerce example from angular office website.

https://angular.io/start

#### Componnent

A component class - Handles data and functionality.
An HTML template - Determines the UI.
Component-specific styles - Define the look and fell.


#### RoadMap
![](./images/road-map.png)

#### bootstrap
![](./images/npm-bootstrap.png)
![](./images/angular-json-bootrap.png)



#### `main.ts` `bootstrap` `AppModule` `app.component.ts`
Angular start sequence and how does it work
* `main.ts` is the entry point 

* `AppModule` knows bootrstrap after `main.ts` loading
![](./images/main.ts.png)

* `app.component.ts` knows bootstrap after `AppModule` loading
![](./images/app.module.ts.png)

* `bootstrap` is ready for using in `app.component.ts`

* `app.compoent.html` is injected into `<app-root>`
![](./images/app.component.ts.png)
![](./images/app.component.html.png)

* `<app-root></app-root>`
![](./images/app-root.png)
![](./images/app.component.html.png)
![](./images/browser.png)

