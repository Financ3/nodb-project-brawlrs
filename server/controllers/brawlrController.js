const brawlrsData = require('../Data/brawlrsData');
/* Example object for a brawler:
    {
        id: 1,
        firstName: 'Ak',
        lastName: 'Kaz',
        title: 'The Terrible',
        race: 'Orc',
        class: 'Warrior',
        attackDamage: 15,
        defenseLevel: 9,
        healthPoints: 30,
        fightingStyle: 'Melee/Ranged',
        wins: 0,
        losses: 0,
        homeLocation: 'Dar Crala',
        img: "C:%5CDocuments%5Cdevmountain%5Cnodb-brawlrs%5Cserver%5CData%5Cimages%5CAkKAz.png"
    }
*/

//This ID starts at 11 because the existing data already has 10 entries.
let brawlrId = 11;

module.exports = {
    getAllBrawlrs: function(req, res) {
        res.status(200).send(brawlrsData);
    },
    getSingleBrawlr: function(req, res) {
        let lookupId = +req.params.id;
        let index = brawlrsData.findIndex(brawlr => brawlr.id===lookupId );

        //Check the given ID to ensure it is in the actual dataset. 
        if (index===(-1)) {
            res.status(400).send(`ID: ${lookupId} does not exist in the current Brawlrs dataset.`);
        }

        foundBrawlr = brawlrsData[index];
        
        res.status(200).send(foundBrawlr);
    },
    addNewBrawlr: (req, res) => {
        let newBrawlr = req.body;
        newBrawlr = {id: brawlrId++, ...req.body};
        brawlrsData.push(newBrawlr);
        res.status(200).send(brawlrsData);
    },
    updateBrawlr: function(req, res) {
        //find the brawlr to be updated using the ID param
        let lookupId = +req.params.id;
        let index = brawlrsData.findIndex(brawlr => brawlr.id===lookupId );

        //Check the given ID to ensure it is in the actual dataset. 
        if (index===(-1)) {
            res.status(400).send(`ID: ${lookupId} does not exist in the current Brawlrs dataset.`);
            return;
        }

        //IF the query is NOT provided, then
        if (Object.keys(req.query).length === 0) {
            //update the brawlr in the brawrlsData array to include the new data in the body (full object update)
            brawlrsData[index] = {id: lookupId, ...req.body};
        } 
        //IF the query is provided correctly, the update is to the win/lost data only
        else if (req.query.fight === "won" || req.query.fight === "lost") { 
            //update the brawlr object - only updating the wins/losses data on the object based on the query data.
            let fight = req.query.fight;
            if (fight==="won") {
                brawlrsData[index].wins+=1;
            } else {
                brawlrsData[index].losses+=1;
            }
        } 
        //if the query string is provided, but was not formatted correctly - throw an error.  
        else {
            res.status(400).send(`Unrecognized query string data. The only allowed query key is ?fight=(won/lost) and is case sensitive.`);
            return;
        }
        //return the updated array of brawlrs
        res.status(200).send(brawlrsData);
    },
    deleteBrawlr: function(req, res) {
        //find the brawlr to be deleted using the ID param
        let lookupId = +req.params.id;
        let index = brawlrsData.findIndex(brawlr => brawlr.id===lookupId );
        if (index===(-1)) {
            res.status(400).send(`ID: ${lookupId} does not exist in the current Brawlrs dataset.`);
        } else {
            brawlrsData.splice(index,1);
            res.status(200).send(brawlrsData);
        }
        
    }
}