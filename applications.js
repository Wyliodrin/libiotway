module.exports = function (http)
{
    return {
        list: async function (){
            let response = await http.get ('/app/list/');
            if (response.data)
                return {
                    err: response.data.err,
                    applications: response.data.applications
                };
            return {
                err: 'Invalid request'
            }
        },

        versions: async function (appId){
            let response = await http.get ('/app/versions/'+appId);
            if (response.data)
                return {
                    err: response.data.err,
                    versions: response.data.versions
                };
            return {
                err: 'Invalid request'
            }
        },

        editVersion: async function (appId, version, params){
            let response = await http.post ('/app/version/'+appId+'/'+version, params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        new: async function (params){
            let response = await http.post ('/app/create', params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        get: async function (appId){
            let response = await http.get ('/app/list/'+appId);
            if (response.data)
                return {
                    err: response.data.err,
                    application: response.data.application
                };
            return {
                err: 'Invalid request'
            }
        },

        deploy: async function (params){
            let response = await http.post ('/app/deploy/'+params.appId, params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        undeploy: async function (deployId){
            let response = await http.post ('/app/undeploy/'+deployId);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        edit: async function (params){
            let response = await http.post ('/app/edit/'+params.appId, params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        delete: async function (appId){
            let response = await http.post ('/app/remove/'+appId);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        // addParam: async function (params){
        //     let response = await http.post ('/app/param/add/'+params.appId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // },

        // delParam: async function (params){
        //     let response = await http.post ('/app/param/del/'+params.appId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // },

        deployerVersions: async function (platform){
            let response = await http.get ('/app/versions/deployer/'+platform);
            if (response.data)
                return {
                    err: response.data.err,
                    versions: response.data.versions
                };
            return {
                err: 'Invalid request'
            }
        }
    };
}