import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NodesService {
  nodes = [
    { id: 1, value: -1, x: 0, y: 10, z: 10 },
    { id: 2, value: 1, x: 50, y: 10, z: -20 },
    { id: 3, value: -2, x: 10, y: 10, z: -10 },
    { id: 4, value: 1, x: -15, y: 10, z: -20 },
    { id: 5, value: 1, x: 30, y: -15, z: -10 },
    { id: 6, value: -1, x: -15, y: -15, z: 20 },
    { id: 8, value: 1, x: 5, y: -15, z: -20 },
    { id: 9, value: 1, x: 17, y: -15, z: 15 },
    { id: 10, value: 1, x: -21, y: -15, z: 50 },
    { id: 11, value: -2, x: -35, y: -15, z: 20 },
    { id: 12, value: -3, x: 8, y: -15, z: 10 }
  ];
   

  constructor() {
    this.getAllNodes;
   }

  getAllNodes() {
    return this.nodes;
  }
 
}
