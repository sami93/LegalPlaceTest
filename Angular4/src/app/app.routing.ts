import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AuthGuardLogin} from './services/auth-guard-login.service';
import {AuthGuardAdmin} from './services/auth-guard-admin.service';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,

        children: [

            {
                path: 'account',
                loadChildren: './account/account.module#AccountModule',
                canActivate: [AuthGuardLogin]
            },

            {
                path: '',
                loadChildren: './todo/todo.module#TodoListModule',
                canActivate: [AuthGuardLogin]
            },
            {
                path: '',
                loadChildren: './user/user.module#UserListModule',
                canActivate: [AuthGuardAdmin]
            },

        {
                path: '',
                loadChildren: './userpage/user.module#UserModule',
                canActivate: [AuthGuardLogin]
            }
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
