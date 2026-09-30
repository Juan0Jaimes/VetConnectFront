import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

    categories = new FormControl('');
    categoriesList: string[] = [
        'Design', 'UI/UX Design', 'Development', 'App', 'Develop', 'Angular'
    ];

    members = new FormControl('');
    membersList: string[] = [
        'Alvarado Turner', 'Evangelina Mcclain', 'Candice Munoz', 'Bernard Langley', 'Kristie Hall', 'Bolton Obrien'
    ];

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

}