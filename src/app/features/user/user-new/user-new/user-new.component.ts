import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../service/api.service';
import { RouterModule,Router } from '@angular/router';
import { AlertService } from '../../../../service/alert/alert.service';

@Component({
  selector: 'app-user-new',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule,RouterModule],
  templateUrl: './user-new.component.html',
  styleUrl: './user-new.component.css'
})
export class UserNewComponent {
  apiUrl:string;
  isloadingButton:boolean;
  // userForm is used to handle all the form validators
  userForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private apiService:ApiService, private router:Router,private alertService:AlertService) {
    this.apiUrl=""
    this.isloadingButton = false;
    this.userForm = this.formBuilder.group(
      {
        name:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        age:['',[Validators.required]],
        password:['',[Validators.required]]
      }
    )
    
  }
  onSubmit() {
    this.isloadingButton = true;
    this.apiUrl="/users/new";
    this.apiService.postMethod(this.apiUrl,this.userForm.value).subscribe(
      {
        next:(value) => {
          this.isloadingButton = false;
          this.router.navigate(["/user-list"]);
          this.alertService.success("Succesfully create new user");
        },
        error:(error) => {
          this.alertService.error(error);
          this.isloadingButton = false;
        }
      }
    )
  }
}
