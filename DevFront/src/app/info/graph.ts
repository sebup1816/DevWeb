import { Graph } from '../models/graph.model';

export const ALL_graph: Graph[] = [
    {
        "nodes" : [
        { "id": 1, "value": -1, "x": 0, "y": 10, "z": 10 },
        { "id": 2, "value": 1, "x": 50, "y": 10, "z": -20 },
        { "id": 3, "value": -2, "x": 10, "y": 10, "z": -10 },
        { "id": 4, "value": 1, "x": -15, "y": 10, "z": -20 },
        { "id": 5, "value": 1, "x": 30, "y": -15, "z": -10 }
        ],
        "edges":[
        { "from": 0, "to": 1, "value": 3 },
        { "from": 0, "to": 3, "value": 3 },
        { "from": 0, "to": 2, "value": -2 }
        ]
    }
]