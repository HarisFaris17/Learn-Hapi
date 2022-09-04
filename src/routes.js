const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request,h)=>{
            return "Home page";
        }
    },
    {
        method : 'POST',
        path : '/',
        handler : (request,h)=>{
            return "you requesting home page with method POST";
        }
    },
    {
        method : 'POST',
        // we can specify path parameter by curly bracketing the parameter. The parameter then stored in request.params
        path : '/{username}',
        handler : (request,h)=>{
            console.log(request.params)
            const {username} = request.params;
            return `you requesting home page with method POST,${username}`;
        }
    },
    {
        method : 'GET',
        // we can specify if the path parameter is optional by adding '?' to the end of parameter. if the user doesn't specify the parameter, then the parameter will be undefined|null
        path : '/about/{username?}',
        handler : (request,h)=>{
            console.log(request.params)
            const {username= "user"} = request.params;
            return `you requesting home page with method POST,${username}`;
        }
    },
    {
        // try to implement query parameter
        method: 'POST',
        path : '/about/{username?}',
        handler : (request,h)=>{
            // query parameter is stored in request.query
            const {name="myName", age=18} = request.query;
            const {username} = request.params;
            return `Your name is ${name} but with username ${username}. You are ${age} years old.`;
        }
    },
    {
        method : 'POST',
        path : '/login',
        handler : (request,h)=>{
            // this the body of request file
            const {username, password} = request.payload;
            return `Congrats ${username} you have successfully logged in. you password is ${password}`;
        }
    },
    {
        method : "POST",
        path : '/register',
        // h in handler parameter is like response in Node.js native
        handler : (request,h)=>{
            return h.response('Request succeed').code(200).header('X-M2M-Origin','hahahaha').type('text/plain')
        }

    },
    {
        // the program will execute the route that is most specific and matched the request. Hence when client request for path / with method GET, the first route will be executed since this route is not specific. If there is no matching request from above route, finally this route will be executed
        // '*' means any
        // any method
        method : '*',
        // any path
        path : '/{any*}',
        handler : (request,h)=>{
            return "Page cant be accessed";
        }
        
    }
]

module.exports = routes