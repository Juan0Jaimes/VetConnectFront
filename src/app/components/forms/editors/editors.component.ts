import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import Quill from 'quill';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.scss']
})
export class EditorsComponent {

    editor: Editor;
    html: '';
    toolbar: Toolbar = [
        // default value
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
        ['horizontal_rule', 'format_clear'],
    ];

    ngOnInit(): void {
        this.editor = new Editor();
    }

    // make sure to destory the editor
    ngOnDestroy(): void {
        this.editor.destroy();
    }

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