import { Injectable } from '@angular/core';
// to use http in this service
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  // classic for how-to for http
  constructor(private http:HttpClient) { }

  // we need a method of this service, in this case we call an API end-point
  getApiData(params={category:'users', id:1}){ // all http client services are observables
    return this.http.get(`http://jsonplaceholder.typicode.com/${params.category}/${params.id}`)
  }
}
