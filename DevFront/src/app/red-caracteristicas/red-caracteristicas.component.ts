import { Component, OnInit } from '@angular/core';
import { NodesService } from '../services/nodes.service'

@Component({
  selector: 'app-red-caracteristicas',
  templateUrl: './red-caracteristicas.component.html',
  styleUrls: ['./red-caracteristicas.component.css']
})
export class RedCaracteristicasComponent implements OnInit {

  nodes=[];
  constructor(private nodesService: NodesService) { }

  ngOnInit(): void {
    this.getAllNodes ();
  }
  

  getAllNodes() {
    this.nodes=this.nodesService.getAllNodes();
  }
}
