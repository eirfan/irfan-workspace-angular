import { Component,OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {AlertService} from '../../../service/alert/alert.service';
@Component ({
    templateUrl:'./alert-succesful.component.html',
    styleUrl:'./alert-succesful.component.css',
    standalone:true,
    selector:'alert-succesful',
    imports:[CommonModule],
})

export class AlertSuccesfulComponent implements OnInit {
    message :String;
    type:String;

    constructor(private alertService:AlertService) {
        this.message = "";
        this.type = "";
    }
    ngOnInit(): void {
        this.alertService.getAlert().subscribe(alert=> {
            this.message = alert.message;
            this.type = alert.type;
        })
    }   
}