// TODO: Configure the environment variables
var path = require('path');
const fetch = require("node-fetch");
const mockAPIResponse = require('./mockAPI.js')
const PORT = 8081
// TODO add Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

// TODO: Create an instance for the server
const express = require('express');
const app = express()
// TODO: Configure cors to avoid cors-origin issue
var cors = require('cors')
app.use(cors())
// TODO: Configure express to use body-parser as middle-ware.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
// TODO: Configure express static directory.
app.use(express.static('dist'))


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-post', async (req, res) => {
    try {
     let postSA = new Promise((resolve, reject)=>{
        try{
            let res = fetch(`${BASE_API_URL}?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`,{
                method: "POST"
            }).then((data)=>{    
                resolve(data.json());
            }).catch((error) => console.log(error))
        }catch(error){
            console.log(error)
            reject('Promise is rejected'); 
        }
    })

    postSA.then((response) => {  
        res.send(JSON.stringify(response));
    });
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
module.exports = app








// let postSA = new Promise((resolve, reject)=>{
//     try{
//         let res = fetch(`${BASE_API_URL}?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`,{
//             method: "POST"
//         }).then((data)=>{    
//             resolve(data.json());
//         }).catch((error) => console.log(error))
          
//     }catch(error){
//         console.log(error)
//         reject('Promise is rejected'); 
//     }
// })

// postSA.then((response) => {  
//     res.send(response);
// });