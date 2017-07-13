import { Component } from 'angular2/core';
import { coursesComponent } from './courses.componets'
import {UserComponent} from './users.component'


@Component({
    selector: 'my-app',
    template: `
                
                <courses></courses>
                <user></user>
                `,
    directives: [coursesComponent, UserComponent]
})
export class AppComponent { }