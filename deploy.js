module.exports = function (http){
    return {
        list: async function (appId){
            let response = await http.get ('/app/deployments/'+appId);
            if (response.data)
                return {
                    err: response.data.err,
                    deployments: response.data.deployments
                };
            return {
                err: 'Invalid request'
            }
        },

        deploymentsProduct: async function (productId){
            let response = await http.get ('/app/deployments/product/'+productId);
            if (response.data)
                return {
                    err: response.data.err,
                    deploymentsProduct: response.data.deploymentsProduct
                };
            return {
                err: 'Invalid request'
            }
        },

        versions: async function (platform){
            let response = await http.get ('/app/versions/com.wyliodrin.deployer.'+platform);
            if (response.data)
                return {
                    err: response.data.err,
                    versions: response.data.versions
                };
            return {
                err: 'Invalid request'
            }
        },

        upgrade: async function (params){
            let response = await http.post ('/app/deploy/upgrade/'+params.deployId, {appId: params.appId});
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        edit: async function (params){
            let response = await http.post ('/app/deploy/parameters/'+params.deployId, {
                appId: params.appId,
                privileged: params.privileged,
                network: params.network,
                parameters: params.parameters
            });
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },
        
        // addParam: async function (params){
        //     let response = await http.post ('/app/deploy/param/add/'+params.deployId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // },

        // delParam: async function (params){
        //     let response = await http.post ('/app/deploy/param/del/'+params.deployId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // },

        get: async function (deployId){
            let response = await http.get ('/app/deploy/'+deployId);
            if (response.data)
                return {
                    err: response.data.err,
                    deploy: response.data.deploy
                };
            return {
                err: 'Invalid request'
            }
        }
    };
}