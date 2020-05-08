import { Component } from '@angular/core';
import { NodesService } from './services/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevFront';

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
