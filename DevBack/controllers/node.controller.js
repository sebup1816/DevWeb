const dbManager = require('../database/db.mannager');


/*

    Create a new node
*/

// CHECK IF THE REQUEST BODY IS EMPTY
async function addNode(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
}
// CREATING THE OBJECT TO PERSIST
    const newNodeObject = {
        ConnectionTo: req.body.ConnectionTo,
        error: req.body.error,
        ip: req.body.ip,
        mac: req.body.mac,
        x: req.body.x,
        y: req.body.y,
        z: req.body.z
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Node.create(newNodeObject).then (
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
exports.addNode=addNode;

    