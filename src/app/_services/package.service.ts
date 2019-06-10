import { Injectable }   from '@angular/core';
import { HttpClient,
  HttpErrorResponse }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { environment }  from '../../environments/environment';
import { Package }      from '../_models/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPackageType():Observable<Package[]> {
    let path = this.url + 'api/package';
    return this.http.get<Package[]>(path).pipe();
  }
  getPackageByUser(user_id:number):Observable<any> {
    let path = this.url + 'api/package/getPackage/' + user_id;
    return this.http.get(path).pipe();
  }
}
