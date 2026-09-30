import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-team-members-list',
    templateUrl: './team-members-list.component.html',
    styleUrls: ['./team-members-list.component.scss']
})
export class TeamMembersListComponent {

    displayedColumns: string[] = ['user', 'email', 'role', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    active = true;
    inactive = true;

}

export interface PeriodicElement {
    email: string;
    role: any;
    user: any;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        user: {
            userName: 'Lucile Young',
            userImage: 'assets/img/user/user8.jpg',
            userDesignation: '@lyoung4a',
        },
        email: 'lyoung4a@tagus.com',
        role: {
            icon: 'assets/img/icon/editor.png',
            roleTitle: 'Editor'
        },
        status: {
            active: 'Active'
        }
    },
    {
        user: {
            userName: 'Jordan Stevenson',
            userImage: 'assets/img/user/user9.jpg',
            userDesignation: '@jstevenson5c',
        },
        email: 'jstevenson5c@tagus.com',
        role: {
            icon: 'assets/img/icon/admin.png',
            roleTitle: 'Admin'
        },
        status: {
            inactive: 'Inactive'
        }
    },
    {
        user: {
            userName: 'Francis Frank',
            userImage: 'assets/img/user/user10.jpg',
            userDesignation: '@ffrank7e',
        },
        email: 'ffrank7e@tagus.com',
        role: {
            icon: 'assets/img/icon/maintainer.png',
            roleTitle: 'Maintainer'
        },
        status: {
            active: 'Active'
        }
    },
    {
        user: {
            userName: 'Phoebe Patterson',
            userImage: 'assets/img/user/user11.jpg',
            userDesignation: '@ppatterson2g',
        },
        email: 'ppatterson2g@tagus.com',
        role: {
            icon: 'assets/img/icon/author.png',
            roleTitle: 'Author'
        },
        status: {
            active: 'Active'
        }
    },
    {
        user: {
            userName: 'James Andy',
            userImage: 'assets/img/user/user1.jpg',
            userDesignation: '@andyjm32',
        },
        email: 'andyjm32@tagus.com',
        role: {
            icon: 'assets/img/icon/admin.png',
            roleTitle: 'Admin'
        },
        status: {
            inactive: 'Inactive'
        }
    },
    {
        user: {
            userName: 'Sarah Taylor',
            userImage: 'assets/img/user/user2.jpg',
            userDesignation: '@taylors32',
        },
        email: 'taylors32@tagus.com',
        role: {
            icon: 'assets/img/icon/editor.png',
            roleTitle: 'Editor'
        },
        status: {
            active: 'Active'
        }
    },
    {
        user: {
            userName: 'David Warner',
            userImage: 'assets/img/user/user3.jpg',
            userDesignation: '@davidwabc2',
        },
        email: 'davidwabc2@tagus.com',
        role: {
            icon: 'assets/img/icon/author.png',
            roleTitle: 'Author'
        },
        status: {
            active: 'Active'
        }
    },
    {
        user: {
            userName: 'Steven Smith',
            userImage: 'assets/img/user/user4.jpg',
            userDesignation: '@ssmith542',
        },
        email: 'ssmith542@tagus.com',
        role: {
            icon: 'assets/img/icon/maintainer.png',
            roleTitle: 'Maintainer'
        },
        status: {
            active: 'Active'
        }
    },
];