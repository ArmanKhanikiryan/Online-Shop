import express from "express"
import cors from "cors"
import bodyParser from 'body-parser'
import fs from "fs";
import https from "https";


const app = express()
const httpsOptions = {
    key: fs.readFileSync('security/certificates/key.pem'),
    cert: fs.readFileSync('security/certificates/cert.pem')
}
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));

app.get('/get', (req, res) => {
    res.send('HELLO')
})

https.createServer(httpsOptions, app).listen(3005, () => {
    console.log('server connected')
})

