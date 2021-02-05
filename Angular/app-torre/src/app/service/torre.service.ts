import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  dataNull;
  searchUrl = "https://search.torre.co/";
  urlApi = "https://torre.bio/api/";

  constructor(private http: HttpClient) { }
  dataGenoma(id) {
    return this.http.get(`${this.urlApi}bios/${id}`).pipe(
      map(resp => {
        return resp;
      })
    )
  }

  dataOpportunities(id) {
    return this.http.get(`${this.urlApi}opportunities/${id}`).pipe(
      map(resp => {
        return resp;
      })
    )
  }

  searchOpo(data) {
    let opportunities = {
      "offset": data.offset,
      "size": data.size,
      "aggregate":data.aggregate
    }
    return this.http.post(`${this.searchUrl}opportunities/_search/?offset=${opportunities.offset}&size=${opportunities.size}&aggregate=${opportunities.aggregate}`,this.dataNull).pipe(
      map(resp => {
        return resp;
      })
    )
  }

  searchPeople(data) {
    let people = {
      "currency": "USD",
      "page": 1,
      "periodicity": "hourly",
      "lang": "es",
      "size": 20,
      "aggregate": data,
      "offset": 1,
    }
    return this.http.post(`${this.searchUrl}people/_search/?currency=${people.currency}&page=${people.page}
      &periodicity=${people.periodicity}&lang=${people.lang}&size=${people.size}&aggregate=${people.aggregate}&offset=${people.offset}`, this.dataNull).pipe(
      map(resp => {
        return resp;
      })
    )
  }

}
