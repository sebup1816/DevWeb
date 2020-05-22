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
  
  nodes = [
    { id: 1, value: -1, x: 0, y: 10, z: 10 },{ id: 2, value: 1, x: 50, y: 10, z: -20 },{ id: 3, value: -2, x: 10, y: 10, z: -10 },{ id: 4, value: 1, x: -15, y: 10, z: -20 },{ id: 5, value: 1, x: 30, y: -15, z: -10 },{ id: 6, value: -1, x: -15, y: -15, z: 20 },{ id: 8, value: 1, x: 5, y: -15, z: -20 },{ id: 9, value: 1, x: 17, y: -15, z: 15 },{ id: 10, value: 1, x: -21, y: -15, z: 50 },{ id: 11, value: -2, x: -35, y: -15, z: 20 },{ id: 12, value: -3, x: 8, y: -15, z: 10 }
  ];
  edges = [
    { from: 0, to: 1, value: 3 },{ from: 0, to: 3, value: 3 },{ from: 0, to: 2, value: -2 },{ from: 0, to: 4, value: 3 },{ from: 5, to: 7, value: 3 },{ from: 5, to: 8, value: 2 },{ from: 7, to: 10, value: 3 },{ from: 5, to: 9, value: -2 },{ from: 5, to: 4, value: 3 },{ from: 5, to: 6, value: 3 }
  ];
  //nodes: any;
  constructor(private nodesService: NodesService) {
    this.createThreePerspective();
  }
  
  createThreePerspective() {
  

    var scene, aspect, camera, renderer, controls;

    scene = new THREE.Scene();
    aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    controls = new OrbitControls(camera, renderer.domElement);

    //CREAR ILUMINACIÓN
    var ambient = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambient);

    var pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(-5, -2, 5);
    scene.add(pointLight);

    var pointLight = new THREE.PointLight(0xffffff, .5, 100);
    pointLight.position.set(5, -2, -5);
    scene.add(pointLight);

    // CREATE THE FLOOR
    var helper = new THREE.GridHelper(2000, 100);
    helper.position.y = - 199;
    helper.material.opacity = 0.3;
    helper.material.transparent = true;
    scene.add(helper);

    var ambient = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambient);


    var parent = new THREE.Object3D();

    camera.position.z = 10;

    var parent = new THREE.Object3D();
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value == -1) {
        var sphereGeometry = new THREE.SphereGeometry(2, 15, 15);
        var sphere = new THREE.Mesh(sphereGeometry);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        sphere.applyMatrix(new THREE.Matrix4().makeTranslation(this.nodes[i].x, this.nodes[i].y, this.nodes[i].z));
        sphere.material = material;
        parent.add(sphere);
      } else if (this.nodes[i].value == -2) {
        var sphereGeometry = new THREE.SphereGeometry(1, 15, 15);
        var sphere = new THREE.Mesh(sphereGeometry);
        var material = new THREE.MeshBasicMaterial({ color: 0xBC0400 });
        sphere.applyMatrix(new THREE.Matrix4().makeTranslation(this.nodes[i].x, this.nodes[i].y, this.nodes[i].z));
        sphere.material = material;
        parent.add(sphere);
      } else if (this.nodes[i].value == -3) {
        var sphereGeometry = new THREE.SphereGeometry(1, 15, 15);
        var sphere = new THREE.Mesh(sphereGeometry);
        var material = new THREE.MeshBasicMaterial({ color: 0x82089D });
        sphere.applyMatrix(new THREE.Matrix4().makeTranslation(this.nodes[i].x, this.nodes[i].y, this.nodes[i].z));
        sphere.material = material;
        parent.add(sphere);
      } else {
        var sphereGeometry = new THREE.SphereGeometry(1, 15, 15);
        var sphere = new THREE.Mesh(sphereGeometry);
        var material = new THREE.MeshBasicMaterial({ color: 0xC1C4C5 });
        sphere.applyMatrix(new THREE.Matrix4().makeTranslation(this.nodes[i].x, this.nodes[i].y, this.nodes[i].z));
        sphere.material = material;
        parent.add(sphere);
      }
    }

    for (var i = 0; i < this.edges.length; i++) {
      var points = [];
      points.push(new THREE.Vector3(this.nodes[this.edges[i].from].x,
        this.nodes[this.edges[i].from].y,
        this.nodes[this.edges[i].from].z));
      points.push(new THREE.Vector3(this.nodes[this.edges[i].to].x,
        this.nodes[this.edges[i].to].y,
        this.nodes[this.edges[i].to].z));
      if (this.edges[i].value == -2) {
        var geometry = new THREE.BufferGeometry().setFromPoints(points);
        var material = new THREE.LineBasicMaterial({ color: 0xFA5738 })
        var line = new THREE.Line(geometry, material);
        parent.add(line);
      } else {
        var geometry = new THREE.BufferGeometry().setFromPoints(points);
        var material = new THREE.LineBasicMaterial({ color: 0x31DEFD })
        var line = new THREE.Line(geometry, material);
        parent.add(line);
      }

    }

    scene.add(parent);

    //  DRAW SCENE
    var render = function () {
      renderer.render(scene, camera);
    };

    //  RUN GAME LOOP (UPDATE, RENDER, REPEAT)
    var GameLoop = function () {
      requestAnimationFrame(GameLoop);
      render();
    };

    GameLoop();
  }
}
