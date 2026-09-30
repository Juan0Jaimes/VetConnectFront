import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
    selector: 'app-accordion-toggles',
    templateUrl: './accordion-toggles.component.html',
    styleUrls: ['./accordion-toggles.component.scss']
})
export class AccordionTogglesComponent {

    @ViewChild(MatAccordion) accordion: MatAccordion;

}