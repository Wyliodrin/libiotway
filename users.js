module.exports = function (httpService)
{
    let http = httpService.http;
    
    return {
        logout: async function (){
            let response = await http.get ('/user/logout');
            if (response.data && response.data.err === 0){
                return true;
            }
            else{
                return false;
            }
        },

        login: async function (params){
            httpService.setEndpoint (params.host);
            let response = await http.post ('/user/login', params);
            if (response.data && response.data.token){
                httpService.setToken (response.data.token);
                return response.data.token;
            }
            return null;
        },

        get: async function (){
            let response = await http.get ('/user');
            if (response.data && response.data.err === 0)
                return response.data.user;
            return null;
        },

        sessions: async function (){
            let response = await http.get ('/user/sessions');
            if (response.data && response.data.err === 0)
                return response.data.sessions;
            return null;
        },

        edit: async function (params){
            let response = await http.get ('/user/edit');
            if (response.data && response.data.err === 0)
                return true;
            return false;
        },

        changePassword: async function (params){
            let response = await http.get ('/user/password/edit');
            if (response.data && response.data.err === 0)
                return true;
            return false;
        },

        deleteSession: async function (tokenId){
            let response = await http.get ('/user/logout/'+tokenId);
            if (response.data && response.data.err === 0)
                return true;
            return false;
        },
    };
}