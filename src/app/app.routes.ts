import { Routes } from '@angular/router';
import { UserListComponent } from './features/user/user-list.component';
import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
import { UserNewComponent } from './features/user/user-new/user-new/user-new.component';
import { DashboardComponent } from './features/code-snippet/dashboard.component';
import { NewSnippetComponent } from './new-snippet/new-snippet.component';
import { WebsocketComponent } from './features/websocket/websocket/websocket.component';
import { SidebarComponent } from './features/layout/sidebar/sidebar.component';
import { app } from '../../server';

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
        path:'user-list/new',
        component:UserNewComponent,
    },
    {
        path:"code-snippet",
        component:SidebarComponent,
        children:[
            {
                path:"dashboard",
                component: DashboardComponent,
            },
            {
                path:"new",
                component: NewSnippetComponent,
            }
        ]
    },
    {
        path:"websocket",
        children: [
            {
                path:"",
                component:WebsocketComponent,
            }
        ]
    },
    {
        path:'',
        redirectTo:'code-snippet/dashboard',
        pathMatch:'full'
    }
];
