module.exports = function (http)
{
    return {
        get: async function (){
            let response = await http.get ('/settings');
            if (response.data)
                return {
                    err: response.data.err,
                    settings: response.data
                };
            return {
                err: 'Invalid request'
            };

        }
    };
};