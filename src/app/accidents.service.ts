import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AccidentsService {

  constructor(private _http: HttpClient) { }

    showAccidents(){
      return this._http.get("http://cosevi.cloudapi.junar.com/api/v2/datastreams/CLASE-Y-TIPOS-DE-ACCID/data.json/?auth_key=b0191f25ec21bf892241ee767b321998c22df14d&limit=10000")
      map(result => result);
    }
  }
