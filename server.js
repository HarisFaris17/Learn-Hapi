const hapi = require('@hapi/hapi');
const routes = require('./routes');

const initialization = async () =>{

    const server = hapi.server({
        port : 8080,
        host : "localhost",

    })
    // server.route accepts route or array of routes. each route is an object that must have path, method, and handler
    // in best practice, try to separate the array of routes file and the main server file
    server.route(routes)

    await server.start();
    console.log("Now the server start...")
}

initialization();