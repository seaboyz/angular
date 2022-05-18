- [Angular](#angular)
    - [RoadMap](#roadmap)
    - [Angular start sequence and how does it work](#angular-start-sequence-and-how-does-it-work)
      - [1. `main.ts`](#1-maints)
      - [2. `app.module.ts` - `AppModule`](#2-appmodulets---appmodule)
      - [3. `app.component.ts` - `AppComponent`](#3-appcomponentts---appcomponent)
      - [4. `app.compoent.html` and `app.component.css` are injected into `app.component.ts`](#4-appcompoenthtml-and-appcomponentcss-are-injected-into-appcomponentts)
      - [5. `selector: 'app-root'`  <---> `<app-root></app-root>`](#5-selector-app-root------app-rootapp-root)
      - [6. templateUrl: './app.component.html' <---> `<app-root></app-root>`](#6-templateurl-appcomponenthtml-----app-rootapp-root)
      - [7. component vs template vs module](#7-component-vs-template-vs-module)
    - [How to create a component and use it](#how-to-create-a-component-and-use-it)
        - [@NgModel](#ngmodel)
        - [Declaration {}](#declaration-)
        - [cli](#cli)
        - [Use `template`](#use-template)
        - [use `styles` or `styleUrls`](#use-styles-or-styleurls)
    - [Selector](#selector)
        - [Selector define the selector for current component, how it is represented in the HTML DOM.](#selector-define-the-selector-for-current-component-how-it-is-represented-in-the-html-dom)
      - [Selector as the Element Name](#selector-as-the-element-name)
      - [Selector as an Attribute](#selector-as-an-attribute)
      - [Selector as a Class](#selector-as-a-class)
        - [string intepolation](#string-intepolation)
    - [Property binding](#property-binding)
      - [property binding vs string interpolation](#property-binding-vs-string-interpolation)
    - [Data Biding](#data-biding)
      - [event biding](#event-biding)
      - [two-way-data-binding](#two-way-data-binding)

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


### RoadMap
![](./images/road-map.png)


### Angular start sequence and how does it work
`main.ts  >>   app.Module.ts  >>  app.component.ts  >>  index.html  >>  app.component.html `

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
* `AppModule` boostraps the with applicaition with `AppCompnent`
***This is where Angular replace the `<app-root></app-root>` tag in `index.html`
![](./images/app.module.ts.png)
```typescript
  bootstrap: [AppComponent]
```
- it is the way to tell angular witch component you should be aware of when the application starts.

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
1. ####  `@Component`
   - Decorator that marks a class as an Angular component and provides configuration ***metadata*** that determines how the component should be processed, instantiated, and used at runtime.
2. #### `templateUrl`
   * The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using `template`.
3. #### `selector` 
   - is used to identify each component uniquely into the component tree, and it also defines how the current component is represented in the HTML DOM.
   - 
4. #### Component Vs Selector Vs Template
   - Component(AppComponent) is the referce to the component in the application(typescript code).
   - Selector is the reference to the component in the HTML.
   - Template is the HTML that will be rendered to the screen.

5. #### Decalre the component in the module
   ##### @NgModel
    - The `@NgModel` decorator marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
   ##### Declaration {}
    - `declarations:{ AppComponent, ServerComponent}`(this is the way to tell angular that this component is used in the application)
    - `ServerComponent` the class name
![](./images/server.component-and-app.module.png)

6. #### Then import it to the `app.module.ts`, then it can be used in `app.component.html`
![](./images/Screen%20Shot%202022-04-30%20at%201.56.10%20PM.png)
![](./images/Screen%20Shot%202022-04-30%20at%201.57.39%20PM.png)

7. #### Use CLI to create a component
##### cli
![](./images/Screen%20Shot%202022-04-30%20at%203.51.25%20PM.png)
`server.component.ts`
![](./images/Screen%20Shot%202022-04-30%20at%204.27.57%20PM.png)
`app.module.ts`
![](./images/Screen%20Shot%202022-04-30%20at%204.28.18%20PM.png)
browser
![](./images/Screen%20Shot%202022-04-30%20at%204.27.19%20PM.png)


##### Use `template`
![](./images/Screen%20Shot%202022-04-30%20at%206.55.28%20PM.png)
`template` or `templateUrl` is a must.

##### use `styles` or `styleUrls`
![](./images/Screen%20Shot%202022-04-30%20at%207.03.48%20PM.png)

### Selector
##### Selector define the selector for current component, how it is represented in the HTML DOM.

* They are the same as the tag name in the HTML.
* They are the same as the css selector.
* They are the same as attribute selector.
  


#### Selector as the Element Name
![](images/selector/element-selector-declaration.png)
![](images/selector/element-selector.png)
#### Selector as an Attribute
![](images/selector/attribute-selector-declaration.png)
![](images/selector/attribute-selector.png)
#### Selector as a Class
![](images/selector/css-selector-declaration.png)
![](images/selector/class-selector.png)

##### string intepolation
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.40.34%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.40.39%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.43.38%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.43.46%20AM.png)

### Property binding
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
