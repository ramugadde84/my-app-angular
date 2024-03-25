import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example URL, replace it with your actual endpoint

  constructor(private http: HttpClient) { }

  getTableData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }
}
