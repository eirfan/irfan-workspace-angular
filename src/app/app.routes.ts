import { Routes } from '@angular/router';
import { UserListComponent } from './features/user/user-list.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';

export const routes: Routes = [
    {
        path:'user-list',
        component: UserListComponent,
    },
    {
        path:'user-list/details/:id',
        component: UserDetailComponent,
    },
    {
        path:'',
        redirectTo:'user-list',
        pathMatch:'full'
    }
];
