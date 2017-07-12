import { Component } from 'angular2/core'
import { CourseService } from './course.service'

@Component({
    selector: "courses",
    template: `
            <h1>Courses</h1>
            {{title}}
            <ul>
                <li *ngFor="#course of courses">{{course}}</li>
            </ul>
            `,
    providers: [CourseService]

})
export class coursesComponent {
    title = "this is a title";
    courses;

    constructor(courseService: CourseService) {//dependency injection
        //new CourseService();
        this.courses = courseService.getCourses();
    }
    //courses = ["angular1", "angular2", "Javascript", "C++", "NodeJs", "Typescript"];
}