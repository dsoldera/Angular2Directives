# Angular2Directives
An Angular 2 Directives Examples for Work


## Differences between @Component and @Directives 
### Components

* For register component we use @Component meta-data annotation.
* Component is a directive which use shadow DOM to create encapsulate visual behavior called components. Components are typically used to create UI widgets.
* Component is used to break up the application into smaller components.
* Only one component can be present per DOM element.
* @View decorator or templateurl template are mandatory in the component.


### Directive

* For register directives we use @Directive meta-data annotation.
* Directives is used to add behavior to an existing DOM element.
* Directive is use to design re-usable components.
* Many directive can be used in a per DOM element.
* Directive don’t have View.

## Usefull Links
* [stackoverflow questions directive-vs-component-in-angular2]()http://stackoverflow.com/questions/32680244/directive-v-s-component-in-angular2
