const express = require('express');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const fs = require('file-system');
const _ = require('lodash');
const contactService = require('./contact/contact.service');

const port = 3000;
const app = express();
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
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
} else {
    app.use('/api', apiRoutes);
    apiRoutes.route('/test').get((req, res) => {
        res.send('Mocks are running');
    });
    apiRoutes.route('/contacts').get((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        setTimeout(() => {
            res.send(contactService.allContact());
        }, 200);
    }).post(urlencodedParser,(req, res) => {
        setTimeout(() => {
            const contact = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email
            };
            const contacts = contactService.addNewContact(contact);
            console.log(contacts);
            if (contacts) {
                fs.writeFile('./contact/contact.json', JSON.stringify(contacts), err => {
                    console.log(err);
                    if (err) {
                        res.status(202).send('');
                    } else {
                        res.status(500).send('');
                    }
                });
            } else {
                res.status(500).send('');
            }
        }, 200);
    });

    apiRoutes.route('/contacts/:id').get((req, res) => {
        setTimeout(() => {
            res.send(contactService.findContactById(req.params.id));
        }, 200);
    });
    apiRoutes.route('/contacts/:firstName/:lastName').get((req, res) => {
        setTimeout(() => {
            res.send(contactService.findContactsByFirstAndLastName(req.params.firstName, req.params.lastName));
        }, 200);
    });
}

app.listen(port, () => {
    console.log(`Mock server listning on port : ${port}`)
});