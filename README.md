# Angular

This the Angular learning notes, and a ecommerce example from angular office website.

* bootstrap(css)
![](./images/npm-bootstrap.png)
![](./images/angular-json-bootrap.png)

https://angular.io/start

Basic Angular structure(component)
* A component class - Handles data and functionality.
* An HTML template - Determines the UI.
* Component-specific styles - Define the look and fell.


## RoadMap
![](./images/road-map.png)


### Angular start sequence and how does it work

#### 1. `main.ts`
```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
  * Everything starts from `main.ts`
![](images/how-it-works/Screen%20Shot%202022-05-17%20at%209.57.51%20AM.png)
`main.ts` -> `bootstrap`-> `AppModule`-> `app.component.ts`

  * `main.ts` is the entry point 

  * `main.ts` bootstraps the application with `AppModule`
![](images/how-it-works/Screen%20Shot%202022-05-17%20at%2010.32.44%20AM.png)
![](./images/main.ts.png)

#### 2. `app.module.ts` - `AppModule`

* `AppModule` is the root module of the application.
* `AppModule` boostraps the `AppCompnent`
![](./images/app.module.ts.png)
```typescript
  bootstrap: [AppComponent]
```

#### 3. `app.component.ts` - `AppComponent`
* `AppComponent` is the root component of the application.


#### 4. `app.compoent.html` and `app.component.css` are injected into `app.component.ts`
![](./images/app.component.ts.png)
![](./images/app.component.html.png)

#### 5. `selector: 'app-root'`  <---> `<app-root></app-root>`
*  selector is the tag that will be used to identify the component other template.

#### 6. templateUrl: './app.component.html' <---> `<app-root></app-root>`
* templateUrl is the path to the template file that will be used to render `<app-root></app-root>`
![](./images/app-root.png)
![](./images/app.component.html.png)
![](./images/browser.png)

#### 7. component vs template vs module
![](images/how-it-works/Lsofi.png) 

### How to create a component and use it
![](./images/server.component.ts.png)
1. `@Component`
Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
2. `templateUrl`
The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using `template`.
3.  A `selector` is used to identify each component uniquely into the component tree, and it also defines how the current component is represented in the HTML DOM.
`Component` = `template` + `selector`

4. Decalre the component in the module
`ServerComponent` the class name
![](./images/server.component-and-app.module.png)

5. then import it to the `app.module.ts`, then it can be used in `app.component.html`
![](./images/Screen%20Shot%202022-04-30%20at%201.56.10%20PM.png)
![](./images/Screen%20Shot%202022-04-30%20at%201.57.39%20PM.png)

#### Use CLI to create a component
cli
![](./images/Screen%20Shot%202022-04-30%20at%203.51.25%20PM.png)
`server.component.ts`
![](./images/Screen%20Shot%202022-04-30%20at%204.27.57%20PM.png)
`app.module.ts`
![](./images/Screen%20Shot%202022-04-30%20at%204.28.18%20PM.png)
browser
![](./images/Screen%20Shot%202022-04-30%20at%204.27.19%20PM.png)


#### Use `template`
![](./images/Screen%20Shot%202022-04-30%20at%206.55.28%20PM.png)
`template` or `templateUrl` is a must.

#### use `styles` or `styleUrls`
![](./images/Screen%20Shot%202022-04-30%20at%207.03.48%20PM.png)

#### attribute selector
![](images/Screen%20Shot%202022-04-30%20at%207.28.33%20PM.png)
![](./images/Screen%20Shot%202022-04-30%20at%207.24.22%20PM.png)
![](./images/Screen%20Shot%202022-04-30%20at%204.27.57%20PM.png)
![](images/Screen%20Shot%202022-04-30%20at%207.25.54%20PM.png)

#### string intepolation
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.40.34%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.40.39%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.43.38%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.43.46%20AM.png)

#### property binding
![](./images/property-bining/Screen%20Shot%202022-05-03%20at%207.21.50%20AM.png)
![](./images/property-bining/Screen%20Shot%202022-05-03%20at%207.21.58%20AM.png)

#### property binding vs string interpolation
![](./images/property-bining/Screen%20Shot%202022-05-03%20at%207.55.27%20AM.png)

### Data Biding
#### event biding
![](./images/event-binding/Screen%20Shot%202022-05-04%20at%208.10.14%20AM.png)
![](./images/event-binding/Screen%20Shot%202022-05-04%20at%208.10.14%20AM.png)
![](./images/event-binding/Screen%20Shot%202022-05-04%20at%208.10.14%20AM.png)
![](./images/event-binding/Screen%20Shot%202022-05-04%20at%208.10.14%20AM.png)

#### two-way-data-binding
![]()
![]()
![]()
![]()
![]()
