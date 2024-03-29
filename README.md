- [Angular](#angular)
    - [RoadMap](#roadmap)
    - [Angular start sequence and how does it work](#angular-start-sequence-and-how-does-it-work)
      - [1. `main.ts` (connect the AppMoudle with the angular)](#1-maints-connect-the-appmoudle-with-the-angular)
      - [2. `app.module.ts` <-> `AppModule`(AppModule connects all the components and modules to AppComponet)](#2-appmodulets---appmoduleappmodule-connects-all-the-components-and-modules-to-appcomponet)
      - [3. `app.component.ts` - `AppComponent`](#3-appcomponentts---appcomponent)
      - [4. `@Component` conntests `app.component.html` and  `app.component.css` and the `class AppComponent`](#4-component-conntests-appcomponenthtml-and--appcomponentcss-and-the-class-appcomponent)
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
      - [Selector as the Element Name(most cases)](#selector-as-the-element-namemost-cases)
      - [Selector as an Attribute](#selector-as-an-attribute)
      - [Selector as a Class](#selector-as-a-class)
    - [Life cycle hooks](#life-cycle-hooks)
      - [`contructor` vs `ngOnInit` vs filed declaration(`state variable`)](#contructor-vs-ngoninit-vs-filed-declarationstate-variable)
    - [Data Biding](#data-biding)
      - [String intepolation](#string-intepolation)
      - [Property binding](#property-binding)
      - [Property binding vs string interpolation](#property-binding-vs-string-interpolation)
      - [Event biding](#event-biding)
      - [Two-way-data-binding](#two-way-data-binding)
      - [Two-way-data-binding and Event-binding works together](#two-way-data-binding-and-event-binding-works-together)
    - [Template Reference Variables](#template-reference-variables)
    - [Directives](#directives)
      - [`ngIf`](#ngif)

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

#### 1. `main.ts` (connect the AppMoudle with the angular)
```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
  * Everything starts from `main.ts`
![](images/how-it-works/Screen%20Shot%202022-05-17%20at%209.57.51%20AM.png)
`main.ts` -> `bootstrap`-> `AppModule`-> `app.component.ts`

  * `main.ts` is the entry point 

  * `main.ts` bootstraps the ***whole application*** with `AppModule`
![](images/how-it-works/Screen%20Shot%202022-05-17%20at%2010.32.44%20AM.png)
![](./images/main.ts.png)

#### 2. `app.module.ts` <-> `AppModule`(AppModule connects all the components and modules to AppComponet)
* `AppModule` is the root module of the application.
* `AppModule` boostraps the with applicaition with `AppCompnent`
***This is where Angular replace the `<app-root></app-root>` tag in `index.html`
![](./images/app.module.ts.png)
  bootstrap: [AppComponent]
- this is where AppModule bootraps the `AppComponent`
- Where the `AppComponent` is the root component of the application
- `AppComponent` knows all the modules and components declared in the app.module.ts

#### 3. `app.component.ts` - `AppComponent`
* `AppComponent` is the root component of the application.
* `@Component` conntests app.component.html and  app.component.css and the logic code in the class

#### 4. `@Component` conntests `app.component.html` and  `app.component.css` and the `class AppComponent`
![](./images/app.component.ts.png)
![](./images/app.component.html.png)

#### 5. `selector: 'app-root'`  <---> `<app-root></app-root>`
*  selector is the tag that will be used to identify the component in other template.

#### 6. templateUrl: './app.component.html' <---> `<app-root></app-root>`
* templateUrl is the path to the template file that will be used to render `<app-root></app-root>`
![](./images/app-root.png)
![](./images/app.component.html.png)
![](./images/browser.png)

#### 7. component vs template vs module
* `moudule` is injected into the component by `angular`
![](images/how-it-works/Lsofi.png) 

### How to create a component and use it
![](./images/server.component.ts.png)
1. ####  `@Component`
   - Decorator that marks a class as an Angular component and provides configuration ***metadata*** that determines how the component should be processed, instantiated, and used at runtime.
2. #### `templateUrl`
   * The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using `template`.
3. #### `selector` 
   - is used to identify each component uniquely into the component tree, and it also defines how the current component is represented in the HTML DOM.
  
4. #### Component Vs Selector Vs Template
   - Component(AppComponent) is the referce to the component in the application(typescript code).
   - Selector is the reference to the component in the HTML.
   - Template is the HTML that will be rendered to the screen.

5. #### Decalre all components in the module
   ##### @NgModel
    - The `@NgModule` decorator marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
   ##### Declaration {}
    - `declarations:{ AppComponent, ServerComponent}`(this is the way to tell `Appcomponent` components are used in the application)
    - `ServerComponent` the class name
![](./images/server.component-and-app.module.png)

1. #### Then import it to the `app.module.ts`, then it can be used in `app.component.html`
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
  


#### Selector as the Element Name(most cases)
![](images/selector/element-selector-declaration.png)
![](images/selector/element-selector.png)
#### Selector as an Attribute
![](images/selector/attribute-selector-declaration.png)
![](images/selector/attribute-selector.png)
#### Selector as a Class
![](images/selector/css-selector-declaration.png)
![](images/selector/class-selector.png)



### Life cycle hooks
#### `contructor` vs `ngOnInit` vs filed declaration(`state variable`)
* `constructor` is called before the ngOnInit
* `constructor` is for service injection
* `constructor` is for simple initialization
* `state variable `is for state initialization
* `ngOnInit` is for complex initialization
* `ngOnInit` is for async initialization
* `ngOnInit` is only called once

### Data Biding
#### String intepolation
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.40.34%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.40.39%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.43.38%20AM.png)
![](./images/string-intepolation/Screen%20Shot%202022-05-03%20at%206.43.46%20AM.png)

#### Property binding
![](./images/property-bining/Screen%20Shot%202022-05-03%20at%207.21.50%20AM.png)
![](./images/property-bining/Screen%20Shot%202022-05-03%20at%207.21.58%20AM.png)

#### Property binding vs string interpolation
![](./images/property-bining/Screen%20Shot%202022-05-03%20at%207.55.27%20AM.png)
#### Event biding
1. When typing, trigger the event
![](images/event-binding/Screen%20Shot%202022-05-19%20at%2010.08.23%20AM.png)
2. `onUpdateServerName($event)` run
![](/images/event-binding/Screen%20Shot%202022-05-19%20at%2010.08.49%20AM.png)
3. state varible `serverName` is updated
![](/images/event-binding/Screen%20Shot%202022-05-19%20at%2010.55.54%20AM.png)
1. `serverName` is updated in the template
![](images/event-binding/Screen%20Shot%202022-05-19%20at%2010.57.17%20AM.png)


#### Two-way-data-binding
1. when typing, `ngModel` reveives the value
![](/images/two-way-binding/Screen%20Shot%202022-05-19%20at%2010.59.49%20AM.png)
2. `ngModel` updates the state variable
![](/images/event-binding/Screen%20Shot%202022-05-19%20at%2010.55.54%20AM.png)
3. `serverName` is updated in the template
![](images/event-binding/Screen%20Shot%202022-05-19%20at%2010.57.17%20AM.png)

#### Two-way-data-binding and Event-binding works together
![](/images/two-way-binding/Screen%20Shot%202022-05-19%20at%2010.42.05%20AM.png)
![](/images/two-way-binding/Screen%20Shot%202022-05-19%20at%2011.04.25%20AM.png)
1. when typing in the event binding input
![](images/two-way-binding/Screen%20Shot%202022-05-19%20at%2011.14.50%20AM.png)

2. trigger the input $event
![](images/event-binding/Screen%20Shot%202022-05-19%20at%2010.08.23%20AM.png)
3. `onUpdateServerName($event)` run
![](/images/event-binding/Screen%20Shot%202022-05-19%20at%2010.08.49%20AM.png)
4. state varible `serverName` is updated
![](/images/event-binding/Screen%20Shot%202022-05-19%20at%2010.55.54%20AM.png)
 * 4.1 `ngModel` reveives the value change from the state variable
  ![](/images/two-way-binding/Screen%20Shot%202022-05-19%20at%2010.59.49%20AM.png)
 * 4.2 `ngModel` updates the input
  ![](images/two-way-binding/Screen%20Shot%202022-05-19%20at%2011.18.23%20AM.png)
5. `serverName` is updated in the template
![](images/event-binding/Screen%20Shot%202022-05-19%20at%2010.57.17%20AM.png)

### Template Reference Variables
template reference variables are used to access the DOM element.Of course, you can the reference variables for input element, and send the element or the value to the class.
![](/images/template-variable/Screen%20Shot%202022-05-19%20at%201.28.21%20PM.png)
![](/images/template-variable/Screen%20Shot%202022-05-19%20at%201.33.36%20PM.png)
![](images/template-variable/Screen%20Shot%202022-05-19%20at%201.34.37%20PM.png)
What you log here is the reference variable of the ***Input element***.

### Directives
![](/images/directives/Screenshot%202023-01-03%20at%2010.33.40%20AM.png)
* `Directives` are Instructions in the DOM.
* `Components` are directives with template.


#### `ngIf`
![](images/directives/Screen%20Shot%202022-05-19%20at%203.27.47%20PM.png)

#### `ngIf else`
```html
<div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
```

#### `ngStyle`
* `ngStyle` allows to dynamiclly change the inline styles
```html
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
```

#### `ngClass`
* `ngClass` allows to dynamiclly add or remove the css class from component
```html
<some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```