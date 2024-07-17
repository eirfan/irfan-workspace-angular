import { Component } from '@angular/core'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { user } from './user'

let user_data: user[] = [
    {
        id:1,
        name:"Irfan hafiz",
        email:"irfanhafiz329@gmail.com",
        age:25
    },
    {   
        id:2,
        name:"Muhammad Hamizan",
        email:"hamizan778@gmail.com",
        age:30
    }
]

@Component ({
    selector:'user-list',
    templateUrl:'./user-list.component.html',
    imports:[MatTableModule,MatButtonModule,MatMenuModule,MatIconModule,RouterLink],
    standalone:true,
})

export class UserListComponent {
    columns: string[] = ['name','email','age','action']; 
    dataSource = user_data;
}