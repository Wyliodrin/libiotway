module.exports = function (http)
{
    return {
        new: async function (params){
            let response = await http.post ('/cluster/add', params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        list: async function (){
            let response = await http.get ('/cluster/list');
            if (response.data)
                return {
                    err: response.data.err,
                    clusters: response.data.clusters
                };
            return {
                err: 'Invalid request'
            }
        },

        get: async function (clusterId){
            let response = await http.get ('/cluster/list/'+clusterId);
            if (response.data)
                return {
                    err: response.data.err,
                    cluster: response.data.cluster
                };
            return {
                err: 'Invalid request'
            }
        },

        delete: async function (clusterId){
            let response = await http.post ('/cluster/remove/'+clusterId);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        edit: async function (params){
            let response = await http.post ('/cluster/edit/'+params.clusterId, params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },
        
        getProvisioningFile: async function (clusterId){
            let response = await http.get ('/cluster/provisioning_file/'+clusterId);
            if (response.data)
                return {
                    err: response.data.err,
                    provisioningFile: response.data.provisioningFile
                };
            return {
                err: 'Invalid request'
            }
        },

        statisticsInstant: async function (clusterId){
            let response = await http.get ('/cluster/statistics/instant/'+clusterId);
            if (response.data)
                return {
                    err: response.data.err,
                    statistics: response.data.statistics
                };
            return {
                err: 'Invalid request'
            }
        },

        statisticsTime: async function (params){
            let response = await http.get ('/cluster/statistics/'+params.time+'/'+params.qty+'/'+params.clusterId);
            if (response.data)
                return {
                    err: response.data.err,
                    statistics: response.data.statistics
                };
            return {
                err: 'Invalid request'
            }
        }

        // addScript: async function (params){
        //     let response = await http.post ('/cluster/script/add/'+params.clusterId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // },

        // delScript: async function (params){
        //     let response = await http.post ('/cluster/script/del/'+params.clusterId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // }
    };
}