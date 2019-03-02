module.exports = function (http)
{
    return {
        list: async function (clusterId){
            let response = await http.get ('/product/list/'+clusterId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.products;
            }
            throw new Error ('invalid request');
        },

        get: async function (productId){
            let response = await http.get ('/product/get/'+productId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.product;
            }
            throw new Error ('invalid request');
        },

        provision: async function (params){
            let response = await http.post ('/product/provision', params);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        delete: async function (productId){
            let response = await http.get ('/product/delete/'+productId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        schedule: async function (params){
            let response = await http.get ('/product/schedule/'+params.productId+'/'+params.action);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        unschedule: async function (params){
            let response = await http.get ('/product/unschedule/'+params.productId+'/'+params.action);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        edit: async function (params){
            let response = await http.post ('/product/edit/'+params.productId, params);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        getProvisioningFile: async function (productId){
            let response = await http.get ('/product/provisioning_file/'+productId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.provisioningFile;
            }
            throw new Error ('invalid request');
        },

        statisticsInstant: async function (productId){
            let response = await http.get ('/product/statistics/instant/'+productId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.statistics;
            }
            throw new Error ('invalid request');
        },

        statisticsTime: async function (params){
            let response = await http.get ('/product/statistics/'+params.time+'/'+params.qty+'/'+params.productId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.statistics;
            }
            throw new Error ('invalid request');
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
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        actions: ['restart', 'distribute']
    };
};