const express = require('express');
const moment = require('moment');
const cors = require('cors')

const app = express();

app.use(cors())

const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* ROUTES */
app.get('/zone', (req, res) => {
    res.json({
        'response': {
            'time': time,
            'timezone': 'utc'
        }
    });
});

app.post('/zone', (req, res) => {

    let body = req.body

    let utc = parseInt(body.utc);
    let time = body.time;

    const offset = moment.utc(time, 'HH:mm:ss').utcOffset(utc).format('HH:mm:ss');

    res.json({
        'response': {
            'time': offset,
            'timezone': 'utc'
        }
    });

    res.json('post users');
});

app.listen(port, () => {
    console.log('Escuchando el puerto 3000');
});