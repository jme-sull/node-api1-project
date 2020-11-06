const express = require('express') // read this like "import express from express"

const server = express(); // a server instance 

const PORT = 8000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
