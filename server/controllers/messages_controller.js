let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        // const index = messages.findIndex(elem => elem.id === +req.params.id)
        // if(index === -1){
        //     res.sendStatus(404)
        // } else {
        //     messages[index].completed = true;
        //     res.status(200).send(messages);
        // }

        const {text} = req.body; // destructure
        // const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id === +req.params.id);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const deleteId = req.params.id; //+req.params.id
        const messageToDelete = messages.findIndex(elem => elem.id == deleteId); //=== deleteId
        if(messageToDelete === -1){
            res.sendStatus(404)
        } else {
            messages.splice(messageToDelete, 1);
            res.status(200).send(messages)
        }
    },
}