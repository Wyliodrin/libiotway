let iotway = require ('./iotway.js');

let calls = iotway.init ('https://studio.iotway.net');

calls.users.login ({
    username: 'show',
    password: 'network'
}). then (function(){
    calls.clusters.list().then(function (clusters){
        console.log (clusters);
        calls.users.logout ().then(function (){
            calls.clusters.list().then (function (clusters){
                console.log (clusters);
            })
        })
    })
})

