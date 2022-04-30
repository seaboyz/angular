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

#### `<app-root></app-root>`
This is replaced by the angular.
![](./images/app-root.png)
![](./images/app.component.ts.png)

#### `main.ts` `bootstrap` `AppModule` `app.component.ts`
Angular start sequence

* `AppModule` knows bootrstrap after `main.ts` loading
![](./images/main.ts.png)

* `app.component.ts` knows bootstrap after `AppModule` loading
![](./images/app.module.ts.png)

* `bootstrap` is ready for using in `app.component.ts`
![](./images/app.component.ts.png)


