import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getUsers():Observable<User[]>{
    let dataURL = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<User[]>(dataURL);
  }
}
