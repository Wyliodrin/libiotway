module.exports = function (http) {
    return {
        new: async function (params) {
            let response = await http.post('/cluster/add', params);
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data
            }
            throw new Error('invalid request');
        },

        list: async function () {
            let response = await http.get('/cluster/list');
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data.clusters;
            }
            throw new Error('invalid request');
        },

        get: async function (clusterId) {
            let response = await http.get('/cluster/list/' + clusterId);
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data.cluster;
            }
            throw new Error('invalid request');
        },

        delete: async function (clusterId) {
            let response = await http.post('/cluster/remove/' + clusterId);
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data;
            }
            throw new Error('invalid request');
        },

        edit: async function (params) {
            let response = await http.post('/cluster/edit/' + params.clusterId, params);
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data;
            }
            throw new Error('invalid request');
        },

        getProvisioningFile: async function (clusterId) {
            let response = await http.get('/cluster/provisioning_file/' + clusterId);
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data.provisioningFile;
            }
            throw new Error('invalid request');
        },

        statisticsInstant: async function (clusterId) {
            let response = await http.get('/cluster/statistics/instant/' + clusterId);
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data.statistics;
            }
            throw new Error('invalid request');
        },

        statisticsTime: async function (params) {
            let response = await http.get('/cluster/statistics/' + params.time + '/' + params.qty + '/' + params.clusterId);
            if (response.data) {
                if (response.data.err)
                    throw new Error(response.data.err);
                return response.data.statistics;
            }
            throw new Error('invalid request');
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