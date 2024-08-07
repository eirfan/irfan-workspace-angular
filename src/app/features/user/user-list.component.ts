import { Component, OnInit } from '@angular/core'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service'
import { user } from './user'

let user_data: user[] = []

@Component ({
    selector:'user-list',
    templateUrl:'./user-list.component.html',
    styleUrl:'./user-list.component.css',
    imports:[MatTableModule,MatButtonModule,MatMenuModule,MatIconModule,RouterLink],
    standalone:true,
})

export class UserListComponent implements OnInit {
    columns: string[] = ['name','email','age','action']; 
    dataSource = user_data;

    constructor( private apiService:ApiService) {}

    ngOnInit(): void {
        // function executed when the component initialized
        this.apiService.getData().subscribe(
           
            {
                next:(value) => {
                    this.dataSource = value;
                },
                error(err) {
                },
               
            }
        )
    }
}