import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor(private http: HttpClient) { }

  getAllNodes() {
    return this.http.get('http://localhost:3003/node/');
  }
}
