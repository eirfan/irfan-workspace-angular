import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { actions } from './actions';
@Component({
  selector: 'app-common-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-action.component.html',
  styleUrl: './common-action.component.css'
})
export class CommonActionComponent implements OnInit {

  isShowingDropdown:boolean;
  actions:Array<actions>;
  constructor () {
    this.isShowingDropdown = false;
    this.actions = [
      {
        title:"Dashboard",
        route:'/',
        isActive:true,
      },
      {
        title:'Add New User',
        route:'/user-list/new',
        isActive:true,
      }
    ]
  }
  ngOnInit(): void {
    this.isShowingDropdown = false;
  }
  showHideDropdown() :void{
    this.isShowingDropdown = !this.isShowingDropdown;
  }
}
