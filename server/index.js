const express = require('express');
brawlrController = require('./controllers/brawlrController');
app = express();
port = 4020;

app.use(express.json());

//endpoint to get all brawlr objects
app.get('/api/brawlrs/', brawlrController.getAllBrawlrs);
//endpoint to get a single brawlr object by id
app.get('/api/brawlrs/:id', brawlrController.getSingleBrawlr);
//endpoint to create a new brawlr object
app.post('/api/brawlrs/', brawlrController.addNewBrawlr);

/*
Endpoint to update an existing brawlr object
Note this put endpoint can accept a query parameter:
(?fight=won/lost)
*/
app.put('/api/brawlrs/:id', brawlrController.updateBrawlr);
//endpoint to delete an existing brawlr endpoint
app.delete('/api/brawlrs/:id', brawlrController.deleteBrawlr);


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});