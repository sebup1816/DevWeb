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
        ConnectionTo: req.body.ConnectionTo,
        error: req.body.error,
        x: req.body.x,
        y: req.body.y,
        z: req.body.z
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.edge.create(newEdgeObject).then (
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


//EXPORTS
exports.addEdge=addEdge;

    