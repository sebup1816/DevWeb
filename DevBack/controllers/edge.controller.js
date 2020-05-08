const dbManager = require('../database/db.mannager');
/*
    Create a new user
*/

// CHECK IF THE REQUEST BODY IS EMPTY
async function addEdge(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
}
// CREATING THE OBJECT TO PERSIST
    const newEdgeObject = {
        ConnectionTo1: req.body.ConnectionTo1,
        ConnectionTo2: req.body.ConnectionTo2,
        error: req.body.error,
        x: req.body.x,
        y: req.body.y,
        z: req.body.z,
        idNode: req.body.idNode
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    await dbManager.edge.create(newEdgeObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

async function getAllEdges (req, res){
    try {
        let ALL_EDGES;
        await dbManager.edge.findAll (). then(
            edges => {
                ALL_EDGES = edges;
                res.json (ALL_EDGES);
            }, error => console.error (error)
        );
    } catch (error) {
        console.log ("******* SOME ERROR OCURRED *********");
        console.error (error);
    }
}


//EXPORTS
exports.addEdge=addEdge;
exports.getAllEdges = getAllEdges;

    