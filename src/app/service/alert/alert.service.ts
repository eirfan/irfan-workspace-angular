import { Injectable } from '@angular/core';
// rxjs is used to handle asynchronouse and event-based programs
//using observable sequence
import { Observable, Subject, timeout } from 'rxjs';

// import alert interface
import { Alert } from '../../features/common/alert/alert'

@Injectable({
  providedIn: 'root'
  // put the providedIn will apply same concept as singleton, 
  // which means the service will only have 1 instance
})
export class AlertService {
  private subject = new Subject<Alert>();
  constructor() { 

  }
  getAlert():Observable<Alert> {
    return this.subject.asObservable();
  }
  success(message:string) {
    this.alert("success",message);
  }
  error(message:string) {
    this.alert("error",message);
  }
  warning(message:string) {
    this.alert("warning",message);
  }
  private alert(type:string,message:string) {
    this.subject.next({type,message});
    setTimeout(()=>{
      this.subject.next({type:'',message:''});

    },2000)
  }
  // private clearAlert() {
  // }

}
