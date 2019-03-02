module.exports = function (http)
{
    return {
        list: async function (){
            let response = await http.get ('/app/list/');
            if (response.data){
                if (!response.data.err)
                    return response.data.applications;
                throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        versions: async function (appId){
            let response = await http.get ('/app/versions/'+appId);
            if (response.data){
                if (!response.data.err)
                    return response.data.versions;
                throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        editVersion: async function (appId, version, params){
            let response = await http.post ('/app/version/'+appId+'/'+version, params);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        new: async function (params){
            let response = await http.post ('/app/create', params);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        get: async function (appId){
            let response = await http.get ('/app/list/'+appId);
            if (response.data){
                if (!response.data.err)
                    return response.data.application;
                throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        deploy: async function (params){
            let response = await http.post ('/app/deploy/'+params.appId, params);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        undeploy: async function (deployId){
            let response = await http.post ('/app/undeploy/'+deployId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        edit: async function (params){
            let response = await http.post ('/app/edit/'+params.appId, params);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        delete: async function (appId){
            let response = await http.post ('/app/remove/'+appId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
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
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.versions;
            }
            throw new Error ('invalid request');
        }
    };
}