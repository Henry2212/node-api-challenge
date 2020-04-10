const server = require('./server');


const port = 5003;
server.listen(port, () => {
    console.log(`server running on port ${port}`);
}); 
