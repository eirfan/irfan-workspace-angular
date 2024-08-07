import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, ReactiveFormsModule , Validators} from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { MatCardModule } from '@angular/material/card';
import { user } from '../user';
import { AlertService } from '../../../service/alert/alert.service';

let user:user;

@Component ({
    templateUrl:'./user-detail.component.html',
    styleUrl:'./user-detail.component.css',
    selector:'user-detail',
    standalone:true,
    imports:[MatCardModule,RouterModule,ReactiveFormsModule],
})


export class UserDetailComponent implements OnInit {

    userForm:FormGroup;
    userId:number;
    dataSource = user;
    apiUrl:string = "http://";
    isLoadingButton:boolean = false;
    constructor ( private apiService : ApiService, private route:ActivatedRoute,private formBuilder:FormBuilder,private router:Router,private alertService:AlertService) {
        this.userId =  Number(this.route.snapshot.paramMap.get("id"));
        this.userForm = this.formBuilder.group(
            {
                name:new FormControl('',[Validators.required]),
                email:new FormControl('',[Validators.required,Validators.email]),
                age:['',[Validators.required]],
            }
        );
    }
    // function executed when the component intialized
    ngOnInit(): void {
        this.apiUrl = "/users/"+this.userId;
        this.apiService.getMethod(this.apiUrl).subscribe(
            {
                next:(value) => {
                    console.table(value);
                    this.dataSource = value;
                    this.userForm.patchValue({
                        name :value.name,
                        email:value.email,
                        age:value.age,
                    })
                },
                error(err) {
                }
            }
        )
    }
    onSubmit():void {
        this.isLoadingButton = true;
        this.apiUrl = "/users/"+this.userId;
        this.apiService.postMethod(this.apiUrl,this.userForm.value).subscribe(
            {
                next:(value) => {
                    this.isLoadingButton = false;
                    this.router.navigate(["/user-list"])
                    this.alertService.success("Succesfully update user details");

                },
                error(err) {
                    console.log(err);
                }
            }
        )
        // called when user submit the form
    }


}