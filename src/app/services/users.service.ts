import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  constructor(public http: HttpClient) { 
    this.url = environment.urlUsers;
  }

  list(): Promise<Array<User>> {
    return this.http.get(this.url).toPromise() as Promise<Array<User>>;
  }

  read(id: number | string): Promise<User> {
    return this.http.get(this.url + id).toPromise() as Promise<User>;
  }

  create(user: User): Promise<User> {
    return this.http.post(this.url, user ).toPromise() as Promise<User>;
  }

  update(id: number | string, user: User): Promise<User>  {
    return this.http.put(this.url + id, user).toPromise() as Promise<User>;
  }

  delete(id: number | string): Promise<object> {
    return this.http.delete(this.url + id).toPromise();
  }

}
