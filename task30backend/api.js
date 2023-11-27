/*
Task:                api.js
Assigned to:         Admin
Date assigned:       20th July 2023
Due date:            20th July 2023
Task complete?       Yes
Task description:    Create an html file called api.js
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const http = require('http');
const { error } = require('console');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(helmet());

userSearch(`/result`, {})
.then(data => console.log(JSON.stringify(data)))
.catch(error => console.log(error));

function userSearch(url= ``, data = {name: ""}) {

    const api = fetch(`https://docs.github.com/en/rest?apiVersion=2022-11-28`);

    app.get('/', function (req, res) {
        api(req.params.name)
        .then((data) => {
            console.log(data);
        });
    });

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}

app.listen(8000, function () {
    console.log('App listening on port 8000')
})