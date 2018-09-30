const express = require('express');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const fs = require('file-system');
const _ = require('lodash');


const port = 3000;
const app = express();
app.use(bodyParser.json());

const apiRoutes = express.Router();
const mockUrl = process.env.MOCKS_URL;

if (mockUrl) {
    app.use(proxy({
        target: mockUrl,
        changeOrigin: true,
        secure: false,
        ws: true,
        xfwd: true
        })
    );
}else{
    app.use('/api', apiRoutes);
    apiRoutes.route('/test').get((req, res) =>{
        res.send('Mocks are running');
    });
}



app.listen(port, ()=>{
    console.log(`Mock server listning on port : ${port}`)
});