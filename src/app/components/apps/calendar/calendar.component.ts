import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        weekends: true,
        events: [
            { title: 'Meeting with UI/UX Designers', date: '2023-03-12' },
            { title: 'Call for payment Project NOK', date: '2023-03-06' },
            { title: 'Picnic with my Family', date: '2023-03-21' },
            { title: 'Project Work with Developers', date: '2023-03-15' },
            { title: 'Meeting with Developers', date: '2023-03-09' },
            { title: 'Consultation with Doctor', date: '2023-03-17' },
            { title: 'Consultation with Employees', date: '2023-03-04' },
            { title: 'Meeting with UI/UX Designers', date: '2023-04-12' },
            { title: 'Call for payment Project NOK', date: '2023-04-06' },
            { title: 'Picnic with my Family', date: '2023-04-21' },
            { title: 'Project Work with Developers', date: '2023-04-15' },
            { title: 'Meeting with Developers', date: '2023-04-09' },
            { title: 'Consultation with Doctor', date: '2023-04-17' },
            { title: 'Consultation with Employees', date: '2023-04-04' },
            { title: 'Meeting with UI/UX Designers', date: '2023-05-12' },
            { title: 'Call for payment Project NOK', date: '2023-05-06' },
            { title: 'Picnic with my Family', date: '2023-05-21' },
            { title: 'Project Work with Developers', date: '2023-05-15' },
            { title: 'Meeting with Developers', date: '2023-05-09' },
            { title: 'Consultation with Doctor', date: '2023-05-17' },
            { title: 'Consultation with Employees', date: '2023-05-04' },
            { title: 'Meeting with UI/UX Designers', date: '2023-06-12' },
            { title: 'Call for payment Project NOK', date: '2023-06-06' },
            { title: 'Picnic with my Family', date: '2023-06-21' },
            { title: 'Project Work with Developers', date: '2023-06-15' },
            { title: 'Meeting with Developers', date: '2023-06-09' },
            { title: 'Consultation with Doctor', date: '2023-06-17' },
            { title: 'Consultation with Employees', date: '2023-06-04' },
        ],
        plugins: [dayGridPlugin]
    };

    constructor(
        public dialog: MatDialog
    ) {}

    openAddEventDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(AddEventDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'add-event-dialog',
    templateUrl: './add-event-dialog.html',
})
export class AddEventDialogBox {

    constructor(
        public dialogRef: MatDialogRef<AddEventDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}