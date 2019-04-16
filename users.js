module.exports = function (httpService)
{   
    //console.log(httpService)
    let http = httpService.http;

    return {
    
        logout: async function (){
            let response = await http.get ('/user/logout');
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        login: async function (params){
        
            httpService.setEndpoint (params.host);
        
            let response = await http.post ('/user/login', params);
            if (response.data && response.data.token){
                httpService.setToken (response.data.token);
                return response.data.token;
            }
            throw new Error ('invalid request');
        },

 
        get: async function (){
            let response = await http.get ('/user');
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.user;
            }
            throw new Error ('invalid request');
        },

        sessions: async function (){
            let response = await http.get ('/user/sessions');
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
                return response.data.sessions;
            }
            throw new Error ('invalid request');
        },

        edit: async function (params){
            let response = await http.get ('/user/edit');
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        changePassword: async function (params){
            let response = await http.get ('/user/password/edit');
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },

        deleteSession: async function (tokenId){
            let response = await http.get ('/user/logout/'+tokenId);
            if (response.data){
                if (response.data.err)
                    throw new Error (response.data.err);
            }
            throw new Error ('invalid request');
        },
    };
}