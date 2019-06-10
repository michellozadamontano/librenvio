import { Injectable }   from '@angular/core';
import { HttpClient,
  HttpErrorResponse }   from '@angular/common/http';
import { Observable,
  BehaviorSubject,
  throwError
}                       from 'rxjs';
import { environment }  from '../../environments/environment';
import { Product }      from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getChunkProducts():Observable<Product[]> {
    let path = this.url + 'api/some_products';
    return this.http.get<Product[]>(path).pipe(

    )
  }
}
