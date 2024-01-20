import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, count } from 'rxjs';
import { Country} from './models/country.model';
import { Stats} from './models/stats.model';
import { Regions} from './models/regions.model';
import { Language } from './models/language.model';

@Injectable({
  providedIn: 'root'
})
export class NationsServiceService {

  private apiUrl = 'http://localhost:8080/api/nations';
  private statsUrl = `${this.apiUrl}/stats`;
  private regionsUrl = `${this.apiUrl}/regionStats`;

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrl);
  }
  
  getCountryLangs(countryId : number): Observable<Language[]>{
    const langsUrl = `${this.apiUrl}/${countryId}`;
    return this.http.get<Language[]>(langsUrl);
  }
  getCountriesStats(): Observable<Stats[]>{
    return this.http.get<Stats[]>(this.statsUrl);
  }
  getRegionsStats(): Observable<Regions[]>{
    return this.http.get<Regions[]>(this.regionsUrl);
  }
}
