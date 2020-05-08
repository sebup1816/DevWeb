import { Component } from '@angular/core';
import { NodesService } from './services/nodes.service';
import * as THREE from '../assets/js/three.js';
import { OrbitControls } from '../assets/js/OrbitControls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevFront';

  nodes: any;

  constructor(private nodesService: NodesService) {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  
    var control = new OrbitControls( camera, renderer.domElement );

    // CREATE THE FLOOR
    var helper = new THREE.GridHelper(2000, 100);
    helper.position.y = - 199;
    helper.material.opacity = 0.3;
    helper.material.transparent = true;
    scene.add(helper);


    //  CREATE A MATERIALS, COLOR AND IMAGE TEXTURE
    var material = new THREE.MeshNormalMaterial({ wireframe: true });
    var material2 = new THREE.MeshNormalMaterial({ wireframe: false });

    //  NODE'S SCHEME
    var geometry = new THREE.SphereGeometry(0.5);

    //  INSTANCE THE NODES
    var node1 = new THREE.Mesh(geometry, material);
    var node2 = new THREE.Mesh(geometry, material);
    var node3 = new THREE.Mesh(geometry, material);
    var node4 = new THREE.Mesh(geometry, material);

    //  ROUTER'S SCHEME
    var router = new THREE.BoxGeometry(1.9, 0.5);

    //  INSTANCE THE ROUTER
    var Router1 = new THREE.Mesh(router, material);

    // CONEXION'S SCHEME
    var conexion = new THREE.CylinderGeometry(0.1, 0.1, 7.3);

    //  INSTANCE THE CONEXIONS
    var ConexionR_1 = new THREE.Mesh(conexion, material2);
    var ConexionR_2 = new THREE.Mesh(conexion, material2);
    var ConexionR_3 = new THREE.Mesh(conexion, material2);
    var ConexionR_4 = new THREE.Mesh(conexion, material2);

    // ADD NODES, ROUTER, CONEXIONS, ETC TO THE SCENE
    scene.add(node1, node2, node3, node4);
    scene.add(Router1);
    scene.add(ConexionR_1, ConexionR_2, ConexionR_3, ConexionR_4);


    camera.position.z = 10;

    //  GAME LOGIC
    var update = function () {

      //node1 (position, rotation)
      node1.position.x = -10;
      node1.position.y = 5;
      node1.position.z = -2;
      node1.rotation.x += 0.01;
      node1.rotation.y += 0.01;

      //node2 (position, rotation)
      node2.position.x = 10;
      node2.position.y = 5;
      node2.position.z = -2;
      node2.rotation.x += 0.01;
      node2.rotation.y += 0.01;

      //node3 (position, rotation)
      node3.position.x = -10;
      node3.position.y = -5;
      node3.position.z = -2;
      node3.rotation.x += 0.01;
      node4.rotation.y += 0.01;

      //node4 (position, rotation)
      node4.position.x = 10;
      node4.position.y = -5;
      node4.position.z = -2;
      node4.rotation.x += 0.01;
      node4.rotation.y += 0.01;

      //router (position, rotation)
      Router1.rotation.x = 0.5;
      Router1.rotation.z = 0.1;

      //  ConexionR_1 (position, rotation)
      ConexionR_1.position.x = -4.2;
      ConexionR_1.position.y = 1.9;
      ConexionR_1.rotation.x = 0.45;
      ConexionR_1.rotation.z = 1.01;

      //  ConexionR_2 (position, rotation)
      ConexionR_2.position.x = 4.2;
      ConexionR_2.position.y = 1.9;
      ConexionR_2.rotation.x = 0.4;
      ConexionR_2.rotation.z = -1;

      //  ConexionR_3 (position, rotation)
      ConexionR_3.position.x = -4.2;
      ConexionR_3.position.y = -2;
      ConexionR_3.rotation.x = 0.1;
      ConexionR_3.rotation.z = -1.1;
      ConexionR_3.rotation.y = 0.2;


      //  ConexionR_4 (position, rotation)
      ConexionR_4.position.x = 4.2;
      ConexionR_4.position.y = -1.9;
      ConexionR_4.rotation.x = 0.4;
      ConexionR_4.rotation.y = -0.4;
      ConexionR_4.rotation.z = 1.2;

    };


    //  DRAW SCENE
    var render = function () {

      renderer.render(scene, camera);

    };


    //  RUN GAME LOOP (UPDATE, RENDER, REPEAT)
    var GameLoop = function () {

      requestAnimationFrame(GameLoop);

      render();
      update();

    };

    GameLoop();
  }

  ngOnInit(): void {
    this.getAllNodes();
  }

  getAllNodes() {
    this.nodesService.getAllNodes().subscribe(
      res => {
        this.nodes = res;
      }, error => console.error(error)
    );
  }
}
