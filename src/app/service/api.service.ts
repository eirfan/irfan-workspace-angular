import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Specify the api url in here
  private apiUrl = "https://localhost:7088/api/";
  constructor(private http:HttpClient) { }

  getData(pageSize:number, pageIndex:number):Observable<any>{
    // return this.http.get<any>(this.apiUrl+"users/paginate?Size="+pageSize+"&PageNumber="+pageIndex);
    return this.http.get<any>(this.apiUrl+"users");
  }

  // function to handle any api request for the get method
  // params : url, String
  getMethod(url:string):Observable<any> {
    return this.http.get<any>(this.apiUrl+url)
  }
  postMethod(url:string,body:any):Observable<any> {
    return this.http.post<any>(this.apiUrl+url,body)
  }
  deleteMethod(url:string):Observable<any> {
    return this.http.delete<any>(this.apiUrl+url);
  }
}
