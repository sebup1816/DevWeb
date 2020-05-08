import { Component, OnInit } from '@angular/core';
import { NodesService } from '../services/nodes.service'

@Component({
  selector: 'app-red-caracteristicas',
  templateUrl: './red-caracteristicas.component.html',
  styleUrls: ['./red-caracteristicas.component.css']
})
export class RedCaracteristicasComponent implements OnInit {

  nodes: any;

  constructor(private nodesService: NodesService) { }

  ngOnInit(): void {
    this.getAllNodes ();
  }

  getAllNodes() {
    this.nodesService.getAllNodes ().subscribe(
      res => {
        this.nodes = res;
      },error => console.error (error)
    );
  }
}
