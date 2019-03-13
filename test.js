let libiotway = require('./iotway');

async function setup(){
    console.log('started');
    let utils = await libiotway.init('https://studio.iotway.net', 'sign', 'demoforiotway');
    //let utils = await libiotway.init('https://studio.iotway.net', '6oLdPs3iCFVDjM88sJKrpVtcMDqKGZ8n');
    //let utils = await libiotway.init('https://studio.iotway.net');
    let token = await libiotway.getToken();
    console.log('tok1' + token);
   
    utils.users = null;
    console.log('Am modif utils.users:' + utils.users);
    utils = await libiotway.init('https://studio.iotway.net', 'sign', 'demoforiotway');
    //utils = await libiotway.init('https://studio.iotway.net', '6oLdPs3iCFVDjM88sJKrpVtcMDqKGZ8n');
    token = await libiotway.getToken();
    console.log('tok2' + token)
    console.log("Reinitializare utils.users:" + utils.users);
}

setup();