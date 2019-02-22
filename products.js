module.exports = function (http)
{
    return {
        list: async function (clusterId){
            let response = await http.get ('/product/list/'+clusterId);
            if (response.data)
                return {
                    err: response.data.err,
                    products: response.data.products
                };
            return {
                err: 'Invalid request'
            }
        },

        get: async function (productId){
            let response = await http.get ('/product/get/'+productId);
            if (response.data)
                return {
                    err: response.data.err,
                    product: response.data.product
                };
            return {
                err: 'Invalid request'
            }
        },

        provision: async function (params){
            let response = await http.post ('/product/provision', params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        delete: async function (productId){
            let response = await http.get ('/product/delete/'+productId);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        schedule: async function (params){
            let response = await http.get ('/product/schedule/'+params.productId+'/'+params.action);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        unschedule: async function (params){
            let response = await http.get ('/product/unschedule/'+params.productId+'/'+params.action);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        edit: async function (params){
            let response = await http.post ('/product/edit/'+params.productId, params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            }
        },

        getProvisioningFile: async function (productId){
            let response = await http.get ('/product/provisioning_file/'+productId);
            if (response.data)
                return {
                    err: response.data.err,
                    provisioningFile: response.data.provisioningFile
                };
            return {
                err: 'Invalid request'
            }
        },

        statisticsInstant: async function (productId){
            let response = await http.get ('/product/statistics/instant/'+productId);
            if (response.data)
                return {
                    err: response.data.err,
                    statistics: response.data.statistics
                };
            return {
                err: 'Invalid request'
            };
        },

        statisticsTime: async function (params){
            let response = await http.get ('/product/statistics/'+params.time+'/'+params.qty+'/'+params.productId);
            if (response.data)
                return {
                    err: response.data.err,
                    statistics: response.data.statistics
                };
            return {
                err: 'Invalid request'
            };
        },

        // addScript: async function (params){
        //     let response = await http.post ('/product/script/add/'+params.productId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // },

        // delScript: async function (params){
        //     let response = await http.post ('/product/script/del/'+params.productId, params);
        //     if (response.data && response.data.err === 0){
        //         return true;
        //     }
        //     return false;
        // },

        activate: async function (params){
            let response = await http.post ('/product/activate/'+params.productId, params);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            };
        },

        actions: ['restart', 'distribute']
    };
};