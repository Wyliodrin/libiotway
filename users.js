module.exports = function (httpService)
{
    let http = httpService.http;
    
    return {
        logout: async function (){
            let response = await http.get ('/user/logout');
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            };
        },

        login: async function (params){
            httpService.setEndpoint (params.host);
            let response = await http.post ('/user/login', params);
            if (response.data && response.data.token){
                httpService.setToken (response.data.token);
                return {
                    token: response.data.token,
                    err: 0
                };
            }
            return {
                err: 'Invalid request'
            };
        },

        get: async function (){
            let response = await http.get ('/user');
            if (response.data)
                return {
                    err: response.data.err,
                    user: response.data.user
                };
            return {
                err: 'Invalid request'
            };
        },

        sessions: async function (){
            let response = await http.get ('/user/sessions');
            if (response.data)
                return {
                    err: response.data.err,
                    sessions: response.data.sessions
                };
            return {
                err: 'Invalid request'
            };
        },

        edit: async function (params){
            let response = await http.get ('/user/edit');
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            };
        },

        changePassword: async function (params){
            let response = await http.get ('/user/password/edit');
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            };
        },

        deleteSession: async function (tokenId){
            let response = await http.get ('/user/logout/'+tokenId);
            if (response.data)
                return {
                    err: response.data.err
                };
            return {
                err: 'Invalid request'
            };
        },
    };
}