const express = require('express') // read this like "import express from express"
const shortid = require('shortid')

const server = express(); // a server instance 
server.use(express.json()); //teaches express how to read json

let users = [
    {
        id: 1, // hint: use the shortid npm package to generate it
        name: "Jane Doe", // String, required
        bio: "Not Tarzan's Wife, another Jane",  // String, required
    },
]

server.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

server.get('/api/users', (req, res) => {
    res.json(users);
})

// server.get('api/users/:id')

server.delete('api/users/:id', (req, res) => {
    const id = req.params.id;
    const deleted = users.find(u => (u.id = id));
    users = users.filter(u => u.id !== id);
    res.json(deleted);
})

// server.put('api/users/:id')

server.post('/api/users', (req, res) => {
    const newUser = req.body; //this needs express.json
    newUser.id = shortid.generate();
    users.push(newUser);
    res.json(newUser);
})


const PORT = 8000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
