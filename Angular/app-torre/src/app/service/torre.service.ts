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

  searchOpo(offset,size,aggregate) {
    return this.http.post(`${this.searchUrl}opportunities/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`,this.dataNull).pipe(
      map(resp => {
        return resp;
      })
    )
  }

  searchPeople(currency,page,periodicity,lang,size,aggregate,offset) {
    return this.http.post(`${this.searchUrl}people/_search/?currency=${currency}&page=${page}&periodicity=${periodicity}&lang=${lang}&size=${size}&aggregate=${aggregate}&offset=${offset}`,this.dataNull).pipe(
      map(resp => {
        return resp;
      })
    )
  }

}
