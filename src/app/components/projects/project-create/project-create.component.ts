import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-project-create',
    templateUrl: './project-create.component.html',
    styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent {

    categories = new FormControl('');
    categoriesList: string[] = [
        'Design', 'UI/UX Design', 'Development', 'App', 'Develop', 'Angular'
    ];

    members = new FormControl('');
    membersList: string[] = [
        'Alvarado Turner', 'Evangelina Mcclain', 'Candice Munoz', 'Bernard Langley', 'Kristie Hall', 'Bolton Obrien'
    ];

}