// node app.js
//npm init
//npm install twilio
//npm install express

const accountSid = 'AC7658d7b87fd949dc6a7c868cf4e554a9';
const authToken = '';
const client = require('twilio')(accountSid, authToken);
const express = require("express");
const { appendFile } = require('fs');
const { request } = require('http');
const app = express();
app.get('', (req, res) => {
    res.send("hello");
});

app.listen("3000", () => {
    console.log("we are on port 3000");
});

setInterval(() => {

    client.messages
        .create({
            body: 'helooo😊',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:'

        })
        .then(message => console.log(message.sid))
        .done();
}, 3000);