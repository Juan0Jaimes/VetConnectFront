import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-stepper-responsive',
    templateUrl: './stepper-responsive.component.html',
    styleUrls: ['./stepper-responsive.component.scss']
})
export class StepperResponsiveComponent {

    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
    });
    thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required],
    });
    stepperOrientation: Observable<StepperOrientation>;

    constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
        this.stepperOrientation = breakpointObserver
        .observe('(min-width: 800px)')
        .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    }

}