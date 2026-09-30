import { Component } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import Quill from 'quill';

@Component({
    selector: 'app-compose-email',
    templateUrl: './compose-email.component.html',
    styleUrls: ['./compose-email.component.scss']
})
export class ComposeEmailComponent {

    blurred = false
    focused = false

    created(event: Quill) {}

    changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

    focus($event:any) {
        this.focused = true
        this.blurred = false
    }

    blur($event:any) {
        this.focused = false
        this.blurred = true
    }

}