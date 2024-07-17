import { Component } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInput, MatInputModule} from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';

@Component ({
    templateUrl:'./user-detail.component.html',
    styleUrl:'./user-detail.component.css',
    selector:'user-detail',
    standalone:true,
    imports:[MatFormFieldModule,MatInputModule,MatCardModule],
})


export class UserDetailComponent{}