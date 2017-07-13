import {Component} from 'angular2/core'
import {userService} from './users.Service'
import {onGlowDirtective} from './OnGlow.directive'


@Component({
    selector: 'user',
    template: `
    <h1>List of users</h1>
    <input type='text' autoGlow style='width:200px'>
    <ul>
      <li *ngFor="#user of users">{{user}}</li>
    </ul>
    `,
    providers: [userService],
    directives: [onGlowDirtective]
})

export class UserComponent {
    users;
    constructor(userservice: userService) {
        this.users = userservice.getusers();
    }

}