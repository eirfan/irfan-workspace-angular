import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { AlertSuccesfulComponent } from './features/common/alert/alert-succesful.component';
import { CommonActionComponent } from './features/common/common-action/common-action.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButton,RouterLink,AlertSuccesfulComponent,CommonActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'irfan-workspace-angular';
}
