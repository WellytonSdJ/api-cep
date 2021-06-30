const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header',
        'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})

const loginData = [{ email: 'teste@teste.com', password: '123' }]

app.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    console.log(loginData[0].email)
    console.log('api -> ', email, password)

    if (email === loginData[0].email && password === loginData[0].password) {
        res.send({ message: 'Success' })
    } else {
        res.send({ message: 'User doesnt exists' })
    }
})


app.listen('8080', () => console.log('server is running'))