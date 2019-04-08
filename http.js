const axios = require ('axios');

let httpInstance;
module.exports = function (endpoint){
    let token = null;

    function axiosInstance (endpoint){
        
        instance = axios.create({
            baseURL: endpoint + '/api/v1'
          });
         
        // Add a request interceptor
        instance.interceptors.request.use(function (config) {
            // Do something before request is sent
            if (token)
                config.headers.Authorization = 'Bearer ' + token;
            return config;
        });
        
        instance.interceptors.response.use((response) => {
            return response;
        }, function (error) {
            if (error.response && error.response.status === 401)
                console.error ('Please authenticate.');
            else if (error.response && error.response.data)
                console.error (error.response.data.err);
            return error;
        });
        return instance;
    }

    httpInstance = axiosInstance (endpoint);
    //console.log(httpInstance.post)

    return {
        http: httpInstance,
        setEndpoint: function (endpoint){
    
            httpInstance = axiosInstance (endpoint);
    
        },
        setToken: function (tok){
            token = tok;
        },
        getToken: function (){
            return token;
        }
    };
}