import { Component } from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

    items = [
        {
            title: 'Company Provides A Full Range of Services?',
            desc: 'Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatueosest facilis natum labitur eleifd.'
        },
        {
            title: 'How Long it Will Take For Web Development?',
            desc: 'Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatueosest facilis natum labitur eleifd.'
        },
        {
            title: 'What About Money Back Guarantee?',
            desc: 'Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatueosest facilis natum labitur eleifd.'
        },
        {
            title: 'How Long Does A Business Consulting Project Last?',
            desc: 'Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatueosest facilis natum labitur eleifd.'
        },
        {
            title: 'Do You Offer Volume or Loyalty Discounts?',
            desc: 'Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatueosest facilis natum labitur eleifd.'
        },
        {
            title: 'In Which Countries Do You Provide Consulting Services?',
            desc: 'Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatueosest facilis natum labitur eleifd.'
        }
    ];
    
    expandedIndex = 0;
    panelOpenState = false;
    
}