let calls = null;
let httpService = null;

function setCalls(endpoint){
    httpService = require ('./http')(endpoint);
    let users = require ('./users')(httpService);
    let clusters = require ('./clusters')(httpService.http);
    let products = require ('./products')(httpService.http);
    let apps = require ('./applications')(httpService.http);
    let deploy = require ('./deploy')(httpService.http);
    let settings = require ('./settings')(httpService.http);
    let projects = require ('./projects')(httpService.http);
    let emulators = require ('./emulators')(httpService.http);

    calls =  {
        users: users,
        clusters: clusters,
        products: products,
        apps: apps,
        deploy: deploy,
        settings: settings,
        project: projects,
        emulators: emulators
    };
}

function initWithToken(){
    let endpoint = arguments[0];
    let token = arguments[1];

    setCalls(endpoint);
    httpService.setToken(token);
   
    return calls;
}

async function initWithLogin(){
    let endpoint = arguments[0];
    let user = arguments[1];
    let pass = arguments[2];

    setCalls(endpoint);
    let params = {
        username: user,
        password: pass,
        host: endpoint
    }
    let token = await calls.users.login(params);
    httpService.setToken(token);
    return calls;
}

module.exports.init = async function (){
    if(arguments.length === 2){
        let calls = await initWithToken(arguments[0], arguments[1]);
        return calls;
    }

    if(arguments.length === 3){
        let calls = await initWithLogin(arguments[0], arguments[1], arguments[2]);
        return calls;
    }

    throw new Error ('Invalid number of parameters for init.');
}

module.exports.getToken = function(){
    return httpService.getToken();
}
