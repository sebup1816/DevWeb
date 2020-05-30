import { Component, OnInit } from '@angular/core';
import { NodesService } from '../services/nodes.service'

@Component({
  selector: 'app-red-caracteristicas',
  templateUrl: './red-caracteristicas.component.html',
  styleUrls: ['./red-caracteristicas.component.css']
})
export class RedCaracteristicasComponent implements OnInit {

  
  nodes = [
    { id: 1, value: -1, x: 0, y: 35, z: 10 , ip: '192.168.1.1', mac: '255.232.325.1'}, { id: 2, value: 1, x: 30, y: 35, z: -10, ip: '192.168.1.2', mac: '255.371.125.1' }, { id: 3, value: -2, x: 30, y: 35, z: 20 , ip: '192.168.1.3', mac: '255.232.435.1'}, { id: 4, value: 1, x: -15, y: 35, z: -20, ip: '192.168.1.4', mac: '255.253.551.1' }, { id: 5, value: 1, x: 30, y: -15, z: -10, ip: '192.168.1.5', mac: '255.215.565.1' }, { id: 6, value: -1, x: -15, y: -15, z: -20, ip: '192.168.1.6', mac: '255.235.255.1' }, { id: 8, value: 1, x: 25, y: -15, z: -40, ip: '192.168.1.7', mac: '255.255.326.1' }, { id: 9, value: 1, x: 17, y: -15, z: 15 , ip: '192.168.1.8', mac: '255.255.232.1'}, { id: 10, value: 1, x: -18, y: -15, z: 40 , ip: '192.168.1.9', mac: '255.255.23255.1'}, { id: 11, value: -2, x: -35, y: -15, z: 20 , ip: '192.168.1.10', mac: '255.2535.255.1'}, { id: 12, value: -3, x: 8, y: -15, z: 20 , ip: '192.168.1.11', mac: '255.255.235.1'}, { id: 13, value: 1, x: 8, y: 60, z: 10 , ip: '192.168.1.12', mac: '255.255.2355.1'}, { id: 14, value: 1, x: 20, y: 60, z: -10, ip: '192.168.1.13', mac: '255.255.2535.1' }, { id: 15, value: 1, x: -20, y: 60, z: 10 , ip: '192.168.1.14', mac: '255.255.2535.1'}
  ];

  constructor(private nodesService: NodesService) { }

  ngOnInit(): void {
    //this.getAllNodes ();
  }
  

  /*getAllNodes() {
    this.nodesService.getAllNodes ().subscribe(
      res => {
        this.nodes = res;
      },error => console.error (error)
    );
  }*/
}
