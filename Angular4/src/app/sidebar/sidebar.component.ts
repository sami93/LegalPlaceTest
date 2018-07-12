import {Component, OnInit} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import {AuthService} from '../services/auth.service';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export let ROUTES: RouteInfo[] = [];

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(public auth: AuthService){
        if(this.auth.isAdmin){
            ROUTES = [{
                path: '/account',
                title: 'Compte',
                type: 'link',
                icontype: 'brightness_auto'
            },
                {
                    path: '/todo',
                    title: 'Todo List',
                    type: 'link',
                    icontype: 'dashboard'
                },
                {
                    path: '/user',
                    title: 'Gestion Utilisateurs',
                    type: 'link',
                    icontype: 'people'
                },
            ]; }
        else {
            ROUTES=[{
                path: '/account',
                title: 'Compte',
                type: 'link',
                icontype: 'brightness_auto'
            },
                {
                    path: '/todo',
                    title: 'Todo List',
                    type: 'link',
                    icontype: 'dashboard'
                },
            ];
        }
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, {wheelSpeed: 2, suppressScrollX: true});
        }
    }

    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
