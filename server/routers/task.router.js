const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

let tasks = [{"title": "clean kitchen"}, {"title": "take out trash"}]

router.get('/', function(request, response){
    response.send(tasks);
});

router.post('/saveform', function(request, response){
    tasks = request.body.tasks;
    response.sendStatus(200);
})

module.exports = router;
