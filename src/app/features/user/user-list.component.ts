import { Component, OnInit, ViewChild } from '@angular/core'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service'
import { user } from './user'
import { AlertService } from '../../service/alert/alert.service';

let user_data: user[] = []

@Component ({
    selector:'user-list',
    templateUrl:'./user-list.component.html',
    styleUrl:'./user-list.component.css',
    imports:[MatTableModule,MatButtonModule,MatMenuModule,MatIconModule,RouterLink,MatPaginatorModule],
    standalone:true,
})

export class UserListComponent implements OnInit {
    
    columns: string[] = ['name','email','age','action']; 
    dataSource = user_data;
    MatDataSource = new MatTableDataSource<user>(this.dataSource);
    totalItems = 0;
    @ViewChild(MatPaginator) paginator! : MatPaginator;
    
    constructor( private apiService:ApiService,private alertService:AlertService,) {
    }

    deleteUser(id:number):void {
        var apiUrl:string = "/users/delete/"+id;
        this.apiService.deleteMethod(apiUrl).subscribe(
            {
                next:(value)=> {
                    this.alertService.success("Succesfully delete user record");
                    this.fetchUser();

                },
                error:(err)=> {
                    this.alertService.error(err);
                }
            }
        );
    }
    fetchUser() {
        let pageIndex = this.paginator.pageIndex + 1 ;
        let pageSize = this.paginator.pageSize;
        this.apiService.getData(pageSize,pageIndex).subscribe(
           
            {
                next:(value) => {
                    this.MatDataSource.data = value;
                    // this.MatDataSource.data  = value.users;
                    // this.totalItems = value.totalUser;
                    // this.paginator.length = this.totalItems;
                },
                error(err) {
                    console.log(err);
                },
               
            }
        )
    }

    ngOnInit(): void {
        // function executed when the component initialized
        
    }
    ngAfterViewInit() {
        this.paginator.pageSize = 5;
        this.MatDataSource.paginator = this.paginator;
        this.paginator.page.subscribe(() => this.fetchUser());
        this.fetchUser()
    }
}