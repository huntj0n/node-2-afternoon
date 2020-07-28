const express = require('express');
const messCtrl = require('./controllers/messages_controller')

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

const port = 3001;

//Endpoints
const messagesBaseUrl = "/api/messages"

app.get(messagesBaseUrl, messCtrl.read)
app.post(messagesBaseUrl, messCtrl.create)
app.delete(`${messagesBaseUrl}/:id`, messCtrl.delete)
app.put(`${messagesBaseUrl}/:id`, messCtrl.update)

app.listen(port, () => console.log(`Server listening on port ${port}`))